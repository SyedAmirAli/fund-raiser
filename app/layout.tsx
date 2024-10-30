import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import Script from 'next/script';
import StoreProvider from './StoreProvider';

const geistSans = localFont({
    src: './fonts/GeistVF.woff',
    variable: '--font-geist-sans',
    weight: '100 900',
});
const geistMono = localFont({
    src: './fonts/GeistMonoVF.woff',
    variable: '--font-geist-mono',
    weight: '100 900',
});
const liAdorRegular = localFont({
    src: './fonts/li-ador-noirrit/regular.ttf',
    variable: '--font-li-ador-regular',
    weight: '400', // Regular weight
});

const liAdorLight = localFont({
    src: './fonts/li-ador-noirrit/light.ttf',
    variable: '--font-li-ador-light',
    weight: '300', // Light weight
});

const liAdorSemiBold = localFont({
    src: './fonts/li-ador-noirrit/semibold.ttf',
    variable: '--font-li-ador-semibold',
    weight: '600', // SemiBold weight
});

const liAdorBold = localFont({
    src: './fonts/li-ador-noirrit/bold.ttf',
    variable: '--font-li-ador-bold',
    weight: '700', // Bold weight
});

const liAdorExtraLight = localFont({
    src: './fonts/li-ador-noirrit/extraLight.ttf',
    variable: '--font-li-ador-extralight',
    weight: '200', // Extra Light weight
});

const liAdorRegularItalic = localFont({
    src: './fonts/li-ador-noirrit/regular-italic.ttf',
    variable: '--font-li-ador-regular-italic',
    weight: '400', // Regular Italic weight
    style: 'italic',
});

const liAdorLightItalic = localFont({
    src: './fonts/li-ador-noirrit/light-italic.ttf',
    variable: '--font-li-ador-light-italic',
    weight: '300', // Light Italic weight
    style: 'italic',
});

const liAdorSemiBoldItalic = localFont({
    src: './fonts/li-ador-noirrit/semibold-italic.ttf',
    variable: '--font-li-ador-semibold-italic',
    weight: '600', // SemiBold Italic weight
    style: 'italic',
});

const liAdorBoldItalic = localFont({
    src: './fonts/li-ador-noirrit/bold-italic.ttf',
    variable: '--font-li-ador-bold-italic',
    weight: '700', // Bold Italic weight
    style: 'italic',
});

const fontVariables: string[] = [
    geistSans.variable,
    geistMono.variable,
    liAdorRegular.variable,
    liAdorLight.variable,
    liAdorSemiBold.variable,
    liAdorBold.variable,
    liAdorExtraLight.variable,
    liAdorRegularItalic.variable,
    liAdorLightItalic.variable,
    liAdorSemiBoldItalic.variable,
    liAdorBoldItalic.variable,
];

export const metadata: Metadata = {
    title: 'Fund Raising',
    description: 'Generated by create next app',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <Script src="/js/font-awesome.js" strategy="lazyOnload" />
            <body
                className={`${fontVariables.join(' ')} antialiased`}
                suppressHydrationWarning={true}
            >
                <StoreProvider>{children}</StoreProvider>
            </body>
        </html>
    );
}
