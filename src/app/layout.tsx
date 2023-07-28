import './globals.css'
import ToasterContext from "@/context/ToasterContext";
import AuthContext from "@/context/AuthContext";



export const metadata = {
    title: ' Next Auth With App Router',
    description: '',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html className="h-full bg-gray-50">
            <body className="h-full">
                <AuthContext>
                    <ToasterContext />
                    {children}
                </AuthContext>
            </body>
        </html>
    )
}