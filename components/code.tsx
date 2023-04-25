import { Code as Bright } from "bright"

export default function Code(props) {
    return (
        <>
            {/* @ts-expect-error Async Server Component */}
            <Bright {...props} />
        </>
    )
}
