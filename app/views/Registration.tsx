import React from "react"
import Join from "../components/join"
import Register from "../components/register"
import { accountsApi } from "../store/api/accountsApi"

export interface Props {}

export default function RegistrationView() {
  const [isEmailVerified, setIsEmailVerified] = React.useState<boolean>(false)
  const [isSessionExpired, setIsSessionExpired] = React.useState<boolean>(false)
  const [creationId, setCreationId] = React.useState<string | null>(null)

  const { data: checkEmailVerifiedStatus } =
    accountsApi.useCheckEmailVerifiedQuery(
      { creation_id: creationId },
      { pollingInterval: 2000, skip: !creationId || isEmailVerified || isSessionExpired }
    )

  console.log("creationId")
  console.log(creationId)
  console.log("checkEmailVerifiedStatus")

  React.useEffect(() => {
    if (checkEmailVerifiedStatus) {
      if (checkEmailVerifiedStatus.success === 1) {
        setIsEmailVerified(true)
      }
      if (checkEmailVerifiedStatus.success === 2) {
        setIsSessionExpired()
      }
    }
  }, [checkEmailVerifiedStatus])

  return (
    <div>
      {isEmailVerified ? <Register /> : <Join setCreationId={setCreationId} />}
    </div>
  )
}
