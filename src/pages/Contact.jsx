import React, { useState } from "react";
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { Images } from "../constant";

const Contact = (props) => {
    const [open, setOpen] = useState(null);
    const toggleAccordion = (index) => {
        setOpen(open === index ? null : index);
    };

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
        services: [],
    });

    const servicesOptions = [
        "Physical",
        "Psychological",
        "Domestic",
        "Human Trafficking",
        "Child Marriage",
        "Other",
    ];

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleCheckboxChange = (service) => {
        setFormData((prev) => {
            const updatedServices = prev.services.includes(service)
                ? prev.services.filter((s) => s !== service)
                : [...prev.services, service];
            return { ...prev, services: updatedServices };
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submitted:", formData);

        Swal.fire({
            icon: 'success',
            title: 'Message Sent Successfully!',
            text: 'Our team will contact you soon.',
            confirmButtonText: 'OK',
            background: '#fef9f9',
            color: '#333',
            iconColor: '#439a46', 
        });
    };

    return (
        <>
            <Link
                to="/"
                className="inline-flex items-center mx-4 md:ms-10 text-[#fe5811] hover:text-[#f14c46b8] mb-8 mt-10 transition-colors"
            >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Back to Overview
            </Link>
            <section className='bg-gray-50 mx-auto w-[90vw] md:w-[80vw] min-h-[850px] mb-20 rounded-3xl'>
                <h1 className="text-2xl md:text-3xl font-bold text-[#fe5811] mb-4 text-center pt-10">Let's Get in touch</h1>
                <p className="text-gray-600 text-center text-base md:text-lg px-4">
                    If you have faced any form of violence or need assistance, please share your experience below.
                    Our team is here to help and support you.
                </p>
                <div className='flex flex-col lg:flex-row gap-10 lg:gap-20 justify-between'>
                    <form
                        onSubmit={handleSubmit}
                        className="w-full lg:w-[50vw] max-w-lg mx-auto p-6 md:p-10 pt-12 md:pt-24"
                    >
                        <div className="mb-6">
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                placeholder="Your name"
                                className="w-full px-3 py-2 bg-transparent border-b-2 border-[#6e170b] focus:outline-none"
                                required
                            />
                        </div>

                        <div className="mb-6">
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                placeholder="your email "
                                className="w-full px-3 py-2 bg-transparent border-b-2 border-[#6e170b] focus:outline-none"
                                required
                            />
                        </div>

                        <div className="mb-6">
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleInputChange}
                                placeholder="Tell us a little about the issue..."
                                rows="4"
                                className="w-full px-3 py-2 bg-transparent border-b-2 border-[#6e170b] focus:outline-none"
                                required
                            ></textarea>
                        </div>

                        <div className="mb-6">
                            <p className="block text-sm font-medium mb-2">The type of Violence?</p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                {servicesOptions.map((service, index) => (
                                    <label key={index} className="flex items-center space-x-2">
                                        <input
                                            type="checkbox"
                                            checked={formData.services.includes(service)}
                                            onChange={() => handleCheckboxChange(service)}
                                            className="h-4 w-4"
                                        />
                                        <span>{service}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-full mt-10 bg-orange-500 text-white py-2 rounded-md hover:bg-orange-500"
                        >
                            Send
                        </button>
                    </form>
                    <div className="hidden lg:block">
                        <img src={Images.contact} className='h-[100vh] w-[30vw] rounded-3xl object-cover' alt="" />
                    </div>
                </div>
            </section>

            <section className="py-8 md:py-16 px-4 md:px-6">
                <div className='justify-center flex flex-col rounded-3xl items-center'>
                    <h2 className="text-3xl md:text-4xl ml-0 md:ml-5 font-bold mb-8 md:mb-16 text-black text-center">Understanding violence</h2>

                    <div className="w-full max-w-6xl mx-auto px-4">
                        <button
                            onClick={() => toggleAccordion(0)}
                            className="w-full py-4 md:py-6 px-4 md:px-6 border-t text-white font-semibold bg-[#2a1110] rounded-2xl shadow-md hover:bg-[#160908e0] focus:outline-none flex items-center justify-between transition-colors"
                        >
                            Les types de violence
                            <span>{open === 0 ? '-' : '+'}</span>
                        </button>
                        {open === 0 && (
                            <div className="px-4 md:px-6 py-4 bg-[#fcd7c16e] rounded-lg mt-4">
                                <ul className="list-disc list-inside space-y-2">
                                    <li>Violence physique</li>
                                    <li>Abus émotionnel ou psychologique</li>
                                    <li>Violence sexuelle</li>
                                    <li>Abus économique</li>
                                    <li>Harcèlement et traque</li>
                                </ul>
                            </div>
                        )}
                    </div>

                    <div className="w-full max-w-6xl mx-auto px-4 mt-2">
                        <button
                            onClick={() => toggleAccordion(1)}
                            className="w-full text-left py-4 md:py-6 px-4 md:px-6 border-t text-white font-semibold bg-[#2a1110] rounded-2xl shadow-md hover:bg-[#160908e0] focus:outline-none flex items-center justify-between transition-colors"
                        >
                            Lessignes d'abus
                            <span>{open === 1 ? '-' : '+'}</span>
                        </button>
                        {open === 1 && (
                            <div className="px-4 md:px-6 py-4 bg-[#fcd7c16e] rounded-lg mt-4">
                                <ul className="list-disc list-inside space-y-2">
                                    <li>Jalousie ou possessivité extrême</li>
                                    <li>Comportement contrôlant</li>
                                    <li>Abus verbal ou menaces</li>
                                    <li>Changements d'humeur rapides</li>
                                    <li>Blâmer la victime pour les problèmes</li>
                                </ul>
                            </div>
                        )}
                    </div>

                    <div className="w-full max-w-6xl mx-auto px-4 mt-2">
                        <button
                            onClick={() => toggleAccordion(2)}
                            className="w-full text-left py-4 md:py-6 px-4 md:px-6 border-t text-white font-semibold bg-[#2a1110] rounded-2xl shadow-md hover:bg-[#160908e0] focus:outline-none flex items-center justify-between transition-colors"
                        >
                            Lesconseils de prévention
                            <span>{open === 2 ? '-' : '+'}</span>
                        </button>
                        {open === 2 && (
                            <div className="px-4 md:px-6 py-4 bg-[#fcd7c16e] rounded-lg mt-4">
                                <p className="text-gray-700">Violence against women has far-reaching consequences:</p>
                                <ul className="list-disc list-inside space-y-2">
                                    <li>Problèmes de santé physique et mentale</li>
                                    <li>Coûts économiques (soins de santé, services juridiques, perte de productivité)</li>
                                    <li>Traumatisme intergénérationnel</li>
                                    <li>Inégalité sociale et discrimination</li>
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </section>

          
        </>
    );
};

export default Contact;