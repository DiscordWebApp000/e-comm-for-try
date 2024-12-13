import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const contents =[
    {
        id:1, 
        image:"/images/blog1.png",
        link :"/products",
        title:"Şık ve rahat bir mont, kış-gunleri icin ideal"
    },
    {
        id:2, 
        image:"/images/blog2.png",
        link :"/products",
        title:"Şık ve rahat bir mont, kış-gunleri icin ideal"
    },
    {
        id:3, 
        image:"/images/blog3.png",
        link :"/products",
        title:"Şık ve rahat bir mont, kış-gunleri icin ideal"
    }

]

const HomeNewsCard = () => {
  return (
    <div className='my-8'>
        <h1 className='text-2xl font-bold text-gray-800 mb-4'>Son kampanyalar</h1>
    <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {contents.map((content) => (
            <Link href={content.link} key={content.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <Image src={content.image} alt="Content Image" width={600} height={600} className="w-full h-52 object-cover" />
               
            </Link>
        ))}
    </div>
    </div>
  )
}

export default HomeNewsCard