import { RouteType } from "@type/routeType";
import routhPath from "./routhPath";
import { DetailPage, HomePage, MyPage, Posting } from "@pages/index";

const pageRoutes: RouteType[]=[
    {
        path:routhPath.HOME,
        element: <HomePage/>
    },
    {
        path:routhPath.DETAIL,
        element:<DetailPage/>
    },
    {
        path:routhPath.MYPAGE,
        element:<MyPage />
    },
    {
        path:routhPath.POST,
        element:<Posting />
    }
]

export default pageRoutes;