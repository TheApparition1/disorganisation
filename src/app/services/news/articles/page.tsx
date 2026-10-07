import Link from "next/link";
import Image from "next/image";

export default function Home() {
	return(
	  <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-50 font-sans dark:bg-black">
           <main className="flex w-full max-w-3xl flex-col items-center justify-between bg-white px-16 py-32 dark:bg-black sm:items-start">
             <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
               <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
	  Disorganised News
	       </h1>
	       <p>
	        This is a list of all articles we provide, just click on the image to navigate to the article.
	       </p>
	       <Link
	        href="/services/news/articles/sample"
	       >
		<Image
	         src="/sampleicon.png"
		 width={200}
		 height={200}
		 alt="Sample"
	       />
	      </Link>
	      <Link
	       href="/services/news/articles/2026-10-07-Political"
	      >
	       <Image
	        src="/20261007politicalicon.png"
		width={200}
		height={200}
		alt="Sample"
	       />
	      </Link>
	     </div>
	   </main>
	 </div>
	)
}
