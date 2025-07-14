export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-8 text-center">
            <h1 className="text-6xl font-bold mb-4">404</h1>
            <p className="text-xl mb-8">Sorry, the page you are looking for does not exist.</p>
            <a
                href="/"
                className="px-6 py-3 bg-primary text-white rounded-md hover:bg-primary-dark"
            >
                Go back home
            </a>
        </div>
    );
}
