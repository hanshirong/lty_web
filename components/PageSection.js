export default function PageSection(props) {
    return (
        <div className={`page-section variant-${props.variant} h-screen w-screen`}>
            {props.children}
        </div>
    );
}
