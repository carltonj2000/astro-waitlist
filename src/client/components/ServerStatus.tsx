import { useEffect, useState } from 'react'
export default function ServerStatus() {
  const [status, statusSet] = useState("");

  useEffect(() => {
    fetch("/api/health").then(res => res.json()).then(data => statusSet(data))
  }, [])
  return (
    <div>
      <h1 className='text-lg text-center'>Server Status</h1>
      <p className='text-center text-green-500'>{status}</p>
    </div>
  )
}

