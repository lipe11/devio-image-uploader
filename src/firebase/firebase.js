import { reactive } from 'vue'
import { initializeApp } from 'firebase/app'
import { getStorage, ref } from 'firebase/storage'
import { uploadBytesResumable, getDownloadURL } from 'firebase/storage'

const app = initializeApp({
  apiKey: 'AIzaSyBj_qz3DuEQ4Pcn6f1k6jb9D_A1JreEpBc',
  authDomain: 'devio-file-uploader.firebaseapp.com',
  projectId: 'devio-file-uploader',
  storageBucket: 'devio-file-uploader.appspot.com',
  messagingSenderId: '992158096917',
  appId: '1:992158096917:web:6e237f5a8380d7560b381c',
  measurementId: 'G-Y3FT7T16K1',
})

const storage = getStorage()

export function useStorage() {
  const data = reactive({
    state: 'idle',
    url: '',
  })

  function uploadImage(file) {
    const imageRef = ref(storage, `images/${file.name}`)
    const task = uploadBytesResumable(imageRef, file)
    task.on(
      'state_changed',
      (snapshot) => {
        data.state = snapshot.state
        data.progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
      },
      (error) => {
        alert('Unable to upload file')
        console.log(error.message)
      },
      () => {
        setTimeout(() => (data.state = 'done'), 500)
        getDownloadURL(task.snapshot.ref).then((url) => {
          data.url = url
        })
      }
    )
  }

  return { data, uploadImage }
}
