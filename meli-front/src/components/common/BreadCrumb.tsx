
interface Props extends React.HTMLAttributes<HTMLDivElement> {
    categories: string[] | string
}


const BreadCrumb: React.FC<Props> = (categories: Props) => {

    const elements = typeof categories.categories === "string"? categories.categories : categories.categories.join(" > ")
    return (
        <div className="container p-3">
        <nav>{elements}</nav>
        </div>

    )
}

export default BreadCrumb