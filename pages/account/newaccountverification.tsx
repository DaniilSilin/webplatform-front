import React from "react"
import NewAccountVerification from "@/app/components/new_account_verification"
import MainLayout from "@/app/MainLayout"
import { wrapper } from "@/app/store"

export interface Props {}

export default function NewAccountVerificationPage(props) {
    console.log(props.stoken)
    console.log(props.creation_id)
  return (
    <MainLayout>
      <NewAccountVerification
        stoken={props.stoken}
        creation_id={props.creation_id}
      />
    </MainLayout>
  )
}

export const getServerSideProps = wrapper.getServerSideProps(
    (store) => async (context) => {
      // Выведет в терминал все параметры (например: { stoken: '123', creation_id: 'abc' })
    //   console.log("=== ДАННЫЕ ИЗ URL НА СЕРВЕРЕ ===", context.query);
  
      const { stoken = "", creation_id = "" } = context.query;
  
      return {
        props: {
          stoken: String(stoken),
          creation_id: String(creation_id),
        },
      };
    }
  );