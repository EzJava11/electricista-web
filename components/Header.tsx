import Image from "next/image"
import Link from "next/link";

export default function Header() {
    return (
        <header className="">
            <div className="flex items-center justify-between p-4 mx-10">
                <Link href="/" aria-label="Logo demo, inicio">
                    <Image className="bg-yellow-300 rounded-4xl"
                        src="/images/logo.svg"
                        alt="Logo demo empresa electrica"
                        width={100}
                        height={100}
                        priority>

                    </Image>
                </Link>
                <nav className="flex gap-4">
                    <a href="#servicios">Servicios</a>
                    <a href="#nosotros">Nosotros</a>
                    <a href="#contacto">Contacto</a>
                </nav>
            </div>
        </header>
    )
}