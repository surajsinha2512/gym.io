function Pricing(){
    return(
        <>
            <div className="bg-black px-4 py-16 min-h-screen">
                <div aria-hidden="true" className="absolute inset-0 h-max w-full m-auto grid grid-cols-2 -space-x-52 opacity-20">
                    <div className="blur-[106px] h-56 bg-gradient-to-br to-purple-400 from-blue-700"></div>
                    <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-indigo-600"></div>
                </div>
                <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
                    <div className="mb-10 space-y-4 px-6 md:px-0">
                        <h2 className="text-center text-2xl font-bold text-white sm:text-3xl md:text-4xl">Pricing</h2>
                    </div>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <div
                            className="flex flex-col items-center aspect-auto p-4 sm:p-8 border rounded-3xl bg-slate-900 border-gray-700 shadow-gray-600/10 shadow-none m-2 flex-1 max-w-md">
                            <h2 className="text-lg sm:text-xl font-medium text-white mb-2">Starter</h2>
                            <p className="text-lg sm:text-xl text-center mb-8 mt-4 text-gray-400">
                                <span className="text-3xl sm:text-4xl font-bold text-white">$19</span> / Month
                            </p>
                            <ul className="list-none list-inside mb-6 text-center text-gray-300">
                                <li className="font-bold text-orange-600">1 Website</li>
                                <li>Custom Domain</li>
                                <li>Basic SEO</li>
                                <li>Limited Support</li>
                            </ul>
                            <a target="_blank" rel="noopener noreferrer"
                                className="mt-3 inline-block text-base font-medium px-3 py-1 border border-accent-400 rounded-full text-white cursor-pointer bg-slate-50/40 backdrop-blur-3xl"
                                href="https://example.com/starter-plan"><span className="relative text-sm font-semibold text-white">Get Started</span></a>
                        </div>
                        <div
                            className="flex flex-col items-center aspect-auto p-4 sm:p-8 border rounded-3xl bg-slate-900 border-gray-700 shadow-gray-600/10 shadow-none m-2 flex-1 max-w-md">
                            <h2 className="text-lg sm:text-xl font-medium text-white mb-2">Pro</h2>
                            <p className="text-lg sm:text-xl text-center mb-8 mt-4 text-gray-400">
                                <span className="text-3xl sm:text-4xl font-bold text-white">$49</span> / Month
                            </p>
                            <ul className="list-none list-inside mb-6 text-center text-gray-300">
                                <li className="font-bold text-orange-600">3 Websites</li>
                                <li>Custom Domain &amp; Subdomain</li>
                                <li>Advanced SEO</li>
                                <li>24/7 Support</li>
                            </ul>
                            <a target="_blank" rel="noopener noreferrer"
                                className="mt-3 inline-block text-base font-medium px-3 py-1 border border-accent-400 rounded-full text-white cursor-pointer bg-slate-50/40 backdrop-blur-3xl"
                                href="https://example.com/pro-plan"><span className="relative text-sm font-semibold text-white">Get Started</span></a>
                        </div>
                        <div
                            className="flex flex-col items-center aspect-auto p-4 sm:p-8 border rounded-3xl bg-slate-900 border-gray-700 shadow-gray-600/10 shadow-none m-2 flex-1 max-w-md">
                            <h2 className="text-lg sm:text-xl font-medium text-white mb-2">Business</h2>
                            <p className="text-lg sm:text-xl text-center mb-8 mt-4 text-gray-400">
                                <span className="text-3xl sm:text-4xl font-bold text-white">$99</span> / Month
                            </p>
                            <ul className="list-none list-inside mb-6 text-center text-gray-300">
                                <li className="font-bold text-orange-600">Unlimited Websites</li>
                                <li>Custom Domain &amp; Subdomain</li>
                                <li>Enterprise SEO</li>
                                <li>Premium Support</li>
                            </ul>
                            <a target="_blank" rel="noopener noreferrer"
                                className="mt-3 inline-block text-base font-medium px-3 py-1 border border-accent-400 rounded-full text-white cursor-pointer bg-slate-50/40 backdrop-blur-3xl"
                                href="https://example.com/business-plan"><span className="relative text-sm font-semibold text-white">Get Started</span></a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Pricing;