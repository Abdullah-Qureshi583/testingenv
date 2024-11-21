import React from 'react'
const a = process.env.MYVAR
console.log("the name is:",a) // Output: myvalue
const Home = () => {
  return (
    <div>
      Home page there is the lRGE content {a}
    </div>
  )
}

export default Home
