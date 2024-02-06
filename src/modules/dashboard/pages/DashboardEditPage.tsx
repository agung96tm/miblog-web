import {ProfileForm} from "@modules/dashboard/components";
import {useLoggedInUser} from "@modules/dashboard/hooks";
import {useNavigate} from "react-router-dom";
import {DASHBOARD_PAGE} from "@modules/dashboard/routes";
import {toast} from "react-toastify";

export const DashboardEditPage = () => {
    const navigate = useNavigate()
    const {fetchedData: user, isLoading} = useLoggedInUser()

    if (isLoading) {
        return <div>Loading....</div>
    }

    const handleEditSuccess = () => {
        toast.success("Edit Profile Success!")
        navigate(DASHBOARD_PAGE)
    }

    return (
        <div style={{
            display: "flex"
        }}>
            <div>
                <ProfileForm user={user} onSuccess={handleEditSuccess}/>
            </div>
        </div>
    )
}