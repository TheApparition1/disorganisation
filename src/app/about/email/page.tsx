import Link from "next/link";

export default function Home() {
	return (
            <div className="flex min-h-screen flex-col items-left justify-left bg-zinc-50 font-sans dark:bg-black"> 
	      <main className="flex w-full max-w-xl flex-col items-left justify-between bg-white px-16 py-32 dark:bg-black sm:items-start">
	        <div className="flex flex-col items-left gap-6 text-center sm:items-start sm:text-left">
		  <h1 className="max-w-xs text-2xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
		    Disorganised Emails
		  </h1>
		  <p>We are working providing an email client to users, this client will be open source, found on github, also hosted on this domain. Use of this client on disorganisation.org will be restricted to select users for the time being. <br / >To request use of the client you may contact us through the contact form. <br / > <br / > Disorganised Emails aims for a user friendly experience, with a simple UI, feature rich system, and easy configuration with your domain*.</p>
               	</div>
	        <div className="flex flex-col gap-3 text-base font-medium sm:flex-row py-8">
		 <Link
		  href="/services/email"
		  className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
		 >
		  Email service
		 </Link>
		</div>
		<div className="flex flex-col gap-3 text-base font-small sm:flex-row py-64">
		  <p>*Restricted to Disorganisation.org for the time being.</p>
		</div>
	      </main>
	    </div>
	);
}
