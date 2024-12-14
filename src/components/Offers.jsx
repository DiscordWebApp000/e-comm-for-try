import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const offers =[
    {
        id:1, 
        image:"/images/box1.png",
        link :"/",
        title:"Hemen Incele"
    },
    {
        id:2, 
        image:"/images/box2.png",
        link :"/",
        title:"Iyi Fiyatlı Ürünler"
    },
    {
        id:3, 
        image:"/images/box3.png",
        link :"/",
        title:"Sende al"
    },
    {
        id:4, 
        image:"/images/box4.png",
        link :"/",
        title:"İndirim Kuponları"
    },
    {
        id:5, 
        image:"/images/box5.png",
        link :"/",
        title:"Sende AL"
    },
    {
        id:6, 
        image:"/images/box6.png",
        link :"/",
        title:"Kredi Kartı"
    }

]

const Offers = () => {
  return (
    <div>
        <div className='w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 my-8'>
            {offers.map((offer) => (
                <Link href={offer.link} key={offer.id} className="rounded-lg overflow-hidden flex flex-col items-center">
                    <Image src={offer.image} alt="Content Image" width={100} height={100} className=" object-cover rounded-full h-auto w-auto" />
                    <h2 className='text-base font-semibold max-w-[100px] text-center mt-2'>{offer.title}</h2>
                
                </Link>
            ))}
        </div>
    </div>
  )
}

export default Offers