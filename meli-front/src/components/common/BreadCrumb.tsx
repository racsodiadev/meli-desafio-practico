
interface Props extends React.HTMLAttributes<HTMLDivElement> {
    categories: string[]
}


const BreadCrumb: React.FC<Props> = (categories: Props) => {

    const elements = categories.categories.join(" > ")
    return (
        <div className="container p-3">
        <nav>{elements}</nav>
        </div>

    )
}

export default BreadCrumb