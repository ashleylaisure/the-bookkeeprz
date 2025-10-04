import ROUTES from "./routes";
import { 
    // BarChart3, 
    BookMarked, 
    BookOpen, 
    // DollarSign, 
    // Heart, 
    LibraryBig, 
    // PenTool, 
    // Quote, 
    // Search, 
    TrendingUp, 
    // User 
} from "lucide-react";

export const sidebarLinks = [
    {
        label: 'Dashboard',
        route: ROUTES.DASHBOARD,
        icon: TrendingUp
    }, 
    {
        label: 'My Books',
        route: ROUTES.MY_BOOKS,
        icon: BookOpen
    }, 
    {
        label: "Authors",
        route: ROUTES.AUTHORS,
        icon: BookMarked
    },
    {
        label: 'Bookshelves',
        route: ROUTES.BOOKSHELVES,
        icon: LibraryBig,
    }, 
    // {
    //     label: 'Series',
    //     route: ROUTES.SERIES,
    //     icon: LibraryBig,
    // }, 
    // {
    //     label: 'Journal',
    //     route: ROUTES.JOURNAL,
    //     icon: PenTool,
    // }, 
    // {
    //     label: "Quotes",
    //     route: ROUTES.QUOTES,
    //     icon: Quote
    // }, 
    // {
    //     label: 'Whishlist',
    //     route: ROUTES.WHISHLIST,
    //     icon: Heart,
    // },
    // {
    //     label: 'Budget',
    //     route: ROUTES.BUDGET,
    //     icon: DollarSign,
    // },
    // {
    //     label: 'Analytics',
    //     route: ROUTES.ANALYTICS,
    //     icon: BarChart3
    // }, 
    // {
    //     label: 'Search Books',
    //     route: ROUTES.SEARCH,
    //     icon: Search,
    // }, 
    // {
    //     label: 'Profile',
    //     route: ROUTES.PROFILE,
    //     icon: User,
    // }
]