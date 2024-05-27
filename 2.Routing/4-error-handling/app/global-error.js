'use client'

export default function GlobalError({ error, reset }) {
    return (
        <html>
            <body>
                <h1>Global error. Something went wrong!</h1>
                <p>Hata mesajı: {error.message}</p>
                <button onClick={() => reset()}>Reset</button>
            </body>
        </html>
    )
}