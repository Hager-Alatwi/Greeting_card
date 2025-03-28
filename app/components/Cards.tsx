'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { card1, card2, card3 } from '@/public/cards/images';

const Cards = () => {
    const [selectedCard, setSelectedCard] = useState<keyof typeof cardStyles | ''>('');
    const [userName, setUserName] = useState<string>('');
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const cardStyles = {
        card1: { image: card1, position: { x: 750, y: 1160 }, color: '#15445A' },
        card2: { image: card2, position: { x: 750, y: 1160 }, color: '#15445A' },
        card3: { image: card3, position: { x: 750, y: 1050 }, color: 'white' },
    };

    const handleCardSelection = (cardKey: keyof typeof cardStyles) => {
        setSelectedCard(cardKey);
        setIsModalOpen(true);
    };

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserName(e.target.value);
    };

    const renderCardWithName = (cardUrl: string, name: string, position: { x: number, y: number }, color: string) => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        const img = document.createElement('img');

        img.src = cardUrl;
        img.onload = () => {
            canvas.width = img.width;
            canvas.height = img.height;

            if (ctx) {
                ctx.drawImage(img, 0, 0);
                ctx.font = '45px Helvetica Neue W23 for SKY Reg';
                ctx.fillStyle = color;
                ctx.textAlign = 'center';
                ctx.fillText(name, position.x, position.y);

                const previewUrl = canvas.toDataURL('image/png');
                setPreviewUrl(previewUrl);
            }
        };
    };

    useEffect(() => {
        if (userName && selectedCard) {
            const { image, position, color } = cardStyles[selectedCard];
            renderCardWithName(image.src, userName, position, color);
        }
    }, [userName, selectedCard]);

    const handleDownload = () => {
        if (previewUrl) {
            const downloadLink = document.createElement('a');
            downloadLink.href = previewUrl;
            downloadLink.download = 'greeting-card.png';
            downloadLink.click();
        }
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setPreviewUrl(null);
        setUserName('');
    };

    return (
        <div>
            <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 w-full max-w-6xl mx-auto p-5 text-center">
                {Object.entries(cardStyles).map(([key, { image }]) => (
                    <div key={key}>
                        <Image
                            src={image}
                            alt={`بطاقة تهنئة ${key}`}
                            width={400}
                            height={300}
                            className="object-cover w-full rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300"
                        />
                        <div className="my-4 text-right">
                            <button
                                onClick={() => handleCardSelection(key as keyof typeof cardStyles)}
                                className="bg-[#C1B48A] text-white w-full py-2 rounded-xl text-sm cursor-pointer hover:bg-[#0c596f]"
                            >
                                معـاينة وتحميــل
                            </button>
                        </div>
                    </div>
                ))}
            </section>

            {isModalOpen && (
                <div className="fixed inset-0 bg-[rgba(0,0,0,0.25)] flex justify-center items-center z-50">
                    <div className="bg-white p-4 rounded-lg w-full sm:w-96 m-5">
                        {previewUrl ? (
                            <img src={previewUrl} alt="Preview Card" className="w-full h-auto" />
                        ) : (
                            <div> الرجاء إدخال اسم صاحب التهنئة للمعاينة</div>
                        )}
                        <div className="mt-4">
                            <input
                                type="text"
                                value={userName}
                                onChange={handleNameChange}
                                placeholder="اسم صاحب التهنئة"
                                className="w-full px-3 py-2 border border-gray-300 focus:border-[#C1B48A] focus-within:outline-[#C1B48A] rounded-md"
                            />
                        </div>
                        <div className="mt-4 flex justify-between">
                            <button
                                onClick={handleDownload}
                                className="bg-[#C1B48A] text-white px-4 py-2 rounded-md"
                            >
                                تنزيــل
                            </button>
                            <button
                                onClick={closeModal}
                                className="bg-gray-500 text-white px-4 py-2 rounded-md"
                            >
                                إلغاء
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Cards;




