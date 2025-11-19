export const Hi = () => {
  const sayHi = () => console.log("hi");
  return (
    <div>
      <button onClick={sayHi}>hi</button>
    </div>
  )
}
