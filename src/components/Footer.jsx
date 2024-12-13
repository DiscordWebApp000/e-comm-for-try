import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-200 text-gray-700 py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4 lg:px-10 max-w-[1400px] ">
        {/* Sol: Logo ve Hakkımızda */}
        <div className="flex flex-col">
          <img
            src="/images/logo.png" // Logonuzun yolunu düzenleyin
            alt="Logo"
            className="w-32 h-auto mb-4"
          />
          <p className="text-sm leading-relaxed">
            Güvenilir alışverişin adresi. Kalite, hız ve müşteri memnuniyeti için buradayız.
          </p>
        </div>

        {/* Orta Sol: Hızlı Erişim */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-800">Hızlı Erişim</h3>
          <ul className="space-y-2">
            <li>
              <a href="/" className="hover:underline hover:text-gray-900">
                Hakkımızda
              </a>
            </li>
            <li>
              <a href="/" className="hover:underline hover:text-gray-900">
                Mağazalar
              </a>
            </li>
            <li>
              <a href="/" className="hover:underline hover:text-gray-900">
                Sıkça Sorulan Sorular
              </a>
            </li>
            <li>
              <a href="/" className="hover:underline hover:text-gray-900">
                Blog
              </a>
            </li>
          </ul>
        </div>

        {/* Orta Sağ: Hizmetler */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-800">Hizmetlerimiz</h3>
          <ul className="space-y-2">
            <li>
              <a href="/" className="hover:underline hover:text-gray-900">
                Kargo Takip
              </a>
            </li>
            <li>
              <a href="/" className="hover:underline hover:text-gray-900">
                Üye Avantajları
              </a>
            </li>
            <li>
              <a href="/" className="hover:underline hover:text-gray-900">
                Güncel İndirimler
              </a>
            </li>
            <li>
              <a href="/" className="hover:underline hover:text-gray-900">
                Müşteri Destek
              </a>
            </li>
          </ul>
        </div>

        {/* Sağ: İletişim ve Sosyal Medya */}
        <div className="flex flex-col">
          <h3 className="text-lg font-semibold mb-4 text-gray-800">İletişim</h3>
          <p className="text-sm mb-4">
            Adres: Örnek Cad. No:123, İstanbul, Türkiye
            <br />
            Telefon: +90 555 123 4567
            <br />
            E-posta: info@ecommerce.com
          </p>
          <div className="flex space-x-4">
            <a href="/" className="text-gray-600 hover:text-blue-600">
              <FaFacebookF size={20} />
            </a>
            <a href="/" className="text-gray-600 hover:text-blue-600">
              <FaTwitter size={20} />
            </a>
            <a href="/" className="text-gray-600 hover:text-pink-600">
              <FaInstagram size={20} />
            </a>
            <a href="/" className="text-gray-600 hover:text-blue-700">
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Alt Bilgi */}
      <div className="mt-8 border-t border-gray-300 pt-4 text-center text-sm">
        <p>&copy; 2024 Your E-commerce Store. Tüm Hakları Saklıdır.</p>
      </div>
    </footer>
  );
};

export default Footer;
