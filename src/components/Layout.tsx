export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <header>header</header>
            <main>{children}</main>
            <footer>footer</footer>
        </>
    );
}
