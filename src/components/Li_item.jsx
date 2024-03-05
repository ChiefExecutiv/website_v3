import { Link } from "react-router-dom"

export default function List_item({Date, Title, Views, Page}) {
    return (
        <li>
            <Link to={`/about/${Page}`}>
                <span className="span_2_1_">
                    <span className="span_2_2_">
                        <span className="date_2_">
                            {Date}
                        </span>
                        <span className="title_2_">
                            {Title}
                        </span>
                        <span className="views_2_">
                            {Views}
                        </span>
                    </span>
                </span>
            </Link>
        </li>
    )
}