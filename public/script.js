import Script from 'next/script'

export default function Script() {
    return (
        <>
            <Script
                id="will-fail"
                src="../path/to/tw-elements/dist/js/index.min.js"
                onError={(e) => {
                    console.error('Script failed to load', e)
                }}
            />
        </>
    )
}
