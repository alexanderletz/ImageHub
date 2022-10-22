import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import '../styles/Upload.css';

export default function Upload() {
  const [image, setImage] = useState({ preview: '', data: '' })
  const [status, setStatus] = useState('')
  const handleSubmit = async (e) => {
    e.preventDefault()
    let formData = new FormData()
    formData.append('file', image.data)
    const response = await fetch('http://localhost:5500/image', {
      method: 'POST',
      body: formData,
    })

    if (response) setStatus(response.statusText)
  }

  const handleFileChange = (e) => {
    const img = {
      preview: URL.createObjectURL(e.target.files[0]),
      data: e.target.files[0],
    }
    setImage(img)
  }

  return (
    <div>
      <Navbar />
    <div className='Upload'>
      <h1>Bild Hochladen</h1>
      {image.preview && <img src={image.preview} width='400'  />}
      <hr></hr>
      <div className="center-cont">

      <form onSubmit={handleSubmit}>
        <input type='file' name='file' accept="image/png, image/gif, image/jpeg" className="form-control" onChange={handleFileChange} required></input>
        <br />
        <button type='submit' className="btn2">Hochladen</button>
      </form>
      </div>
      {status && <h4>{status}</h4>}
    </div>
    </div>
  )
}