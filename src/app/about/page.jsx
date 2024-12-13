import React from 'react';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const AboutUs = () => {
  return (
    <div> 
        <Navbar />
        <div className="bg-white text-gray-800 p-8 md:p-16">
        {/* Header Section */}
        <section className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900">Hakkımızda</h1>
            <p className="text-lg mt-4 text-gray-600">Bizimle tanışın ve vizyonumuzu keşfedin.</p>
        </section>

        {/* Our Story Section */}
        <section className="mb-16">
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">Hikayemiz</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
            2010 yılında kurulan şirketimiz, teknoloji ve inovasyon odaklı çözümler sunarak sektördeki ihtiyaçları
            karşılamak amacıyla yola çıktı. Günümüzde, milyonlarca kullanıcıya hizmet veriyoruz ve her geçen gün büyüyerek
            sektördeki yerimizi pekiştiriyoruz. Her zaman müşteri memnuniyetini ön planda tutarak, kaliteli ürün ve hizmet
            sunmaya devam ediyoruz.
            </p>
        </section>

        {/* Mission & Vision Section */}
        <section className="bg-gray-100 p-8 rounded-lg shadow-lg mb-16">
            <div className="md:flex md:justify-between md:space-x-12">
            <div className="mb-8 md:mb-0">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Misyonumuz</h3>
                <p className="text-lg text-gray-700">
                Teknolojiyi, hayatı kolaylaştıracak ve insanlara değer katacak şekilde kullanmak. Misyonumuz, sektördeki en
                iyi çözümleri sunmak ve her müşterimizin ihtiyaçlarına özel, sürdürülebilir çözümler üretmektir.
                </p>
            </div>
            <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Vizyonumuz</h3>
                <p className="text-lg text-gray-700">
                Yenilikçi ve sürdürülebilir bir geleceği inşa etmek. Vizyonumuz, global pazarda lider bir marka haline
                gelmek ve insanların yaşam kalitesini artıran ürünler ve hizmetler sunmaktır.
                </p>
            </div>
            </div>
        </section>

        {/* Team Section */}
        <section className="mb-16">
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">Ekip</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
                <img
                src="https://via.placeholder.com/150"
                alt="Ekip Üyesi"
                className="w-32 h-32 mx-auto rounded-full mb-4"
                />
                <h4 className="text-xl font-semibold text-gray-900">Ali Yılmaz</h4>
                <p className="text-gray-600">CEO & Kurucu</p>
            </div>
            <div className="text-center">
                <img
                src="https://via.placeholder.com/150"
                alt="Ekip Üyesi"
                className="w-32 h-32 mx-auto rounded-full mb-4"
                />
                <h4 className="text-xl font-semibold text-gray-900">Zeynep Demir</h4>
                <p className="text-gray-600">CTO</p>
            </div>
            <div className="text-center">
                <img
                src="https://via.placeholder.com/150"
                alt="Ekip Üyesi"
                className="w-32 h-32 mx-auto rounded-full mb-4"
                />
                <h4 className="text-xl font-semibold text-gray-900">Murat Şahin</h4>
                <p className="text-gray-600">Pazarlama Direktörü</p>
            </div>
            </div>
        </section>

        {/* Contact Us Section */}
        <section className="bg-gray-100 p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">Bizimle İletişime Geçin</h2>
            <form className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                <label htmlFor="name" className="block text-gray-700 mb-2">Adınız</label>
                <input
                    type="text"
                    id="name"
                    className="w-full p-3 border border-gray-300 rounded-md"
                    placeholder="Adınızı girin"
                />
                </div>
                <div>
                <label htmlFor="email" className="block text-gray-700 mb-2">E-posta</label>
                <input
                    type="email"
                    id="email"
                    className="w-full p-3 border border-gray-300 rounded-md"
                    placeholder="E-posta adresinizi girin"
                />
                </div>
            </div>
            <div>
                <label htmlFor="message" className="block text-gray-700 mb-2">Mesajınız</label>
                <textarea
                id="message"
                className="w-full p-3 border border-gray-300 rounded-md"
                placeholder="Mesajınızı buraya yazın"
                />
            </div>
            <button
                type="submit"
                className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600"
            >
                Gönder
            </button>
            </form>
        </section>
        </div>
        <Footer/>
    </div>
  );
};

export default AboutUs;
