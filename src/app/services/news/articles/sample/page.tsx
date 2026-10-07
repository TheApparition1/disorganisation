import Image from "next/image";

export default function Home() {
	return (
		<div className="flex min-h-screen flex-col items-left justify-center bg-zinc-50  font-sans dark:bg-black">
		  <main className="flex w-full max-w-2xl flex-col items-center justify-between bg-white px-16 py-2 dark:bg-black sm:items-start">
		    <div className="flex flex-col items-center gap-1 text-center sm:items-start sm:text-left">
		    <Image 
		     src="/samplebanner.png"
		     height={400}
		     width={2000}
		     alt="Sample Image"
		    / > 
		    <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
		      This page has been added as a sample.
		     </h1>
		     <p>
		      In breaking news we added a sample page for testing formatting, we may be able to launch soon! 
	<br / >      This comes after the programming of the website's basic menus.
	<br / >      
		     </p>
		    </div>
		  </main>
		</div>
	)
}
