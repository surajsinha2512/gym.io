function AboutUs() {
    return (<>
        <section className="bg-black" id="aboutus">
        <h2 className="text-3xl font-bold text-gray-100 mb-8 text-center border-l-4 border-orange-600">About Us</h2>
            <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
                <div className="flex justify-center items-center gap-14">
                    <div className="max-w-lg">
                        
                        <p className="mt-4 text-gray-200 text-lg">
                            Bappa flour mill provides our customers with the highest quality products and services. We offer a
                            wide variety of flours and spices to choose from, and we are always happy to help our customers find
                            the perfect products for their needs.
                            We are committed to providing our customers with the best possible experience. We offer competitive
                            prices, fast shipping, and excellent customer service. We are also happy to answer any questions
                            that our customers may have about our products or services.
                            If you are looking for a flour and spices service business that can provide you with the highest
                            quality products and services, then we are the company for you. We look forward to serving you!</p>
                    </div>
                    <div className="mt-12 md:mt-0">
                        <img
                            src="https://img.freepik.com/free-photo/dumbbells-floor-gym-ai-generative_123827-23744.jpg?size=626&ext=jpg&ga=GA1.1.1224184972.1714089600&semt=ais"
                            alt="About Us Image"
                            className="rounded-lg h-74 w-112 shadow-md"
                        />
                    </div>
                </div>
            </div>
        </section>
    </>)
}
export default AboutUs;