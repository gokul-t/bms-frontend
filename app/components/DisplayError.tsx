export default function DisplayError({ error }: { error: unknown }) {
    return <div> {JSON.stringify(error, null, 4)} </div>;
}