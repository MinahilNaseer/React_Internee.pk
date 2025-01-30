import React from "react";
import { motion } from "framer-motion";

function Contact() {
    return (
        <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }} exit={{ scale: 0.8 }}>
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <form className="space-y-4">
                <div>
                    <label htmlFor="name" className="block text-gray-700">Name</label>
                    <input
                        type="text"
                        id="name"
                        className="w-full border-gray-300 rounded p-2 focus:ring-2 focus:ring-green-500"
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block text-gray-700">Email</label>
                    <input
                        type="email"
                        id="email"
                        className="w-full border-gray-300 rounded p-2 focus:ring-2 focus:ring-green-500"
                    />
                </div>
                <div>
                    <label htmlFor="message" className="block text-gray-700">Message</label>
                    <textarea
                        id="message"
                        rows="4"
                        className="w-full border-gray-300 rounded p-2 focus:ring-2 focus:ring-green-500"
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                >
                    Send Message
                </button>
            </form>
        </motion.div>
    );
}

export default Contact;