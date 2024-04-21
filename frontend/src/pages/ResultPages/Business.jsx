import Card1 from "../../components/DashboardCards/Card1";
import Card2 from "../../components/DashboardCards/Card2";
import Card3 from "../../components/DashboardCards/Card3";
import Card7 from "../../components/DashboardCards/Card7";

const Business = () => {
  return (
    <>
      <Card1
        heading={"About Company"}
        text={"This section provides a brief overview of the company."}
      />
      {/* <Card2 data={data?.content?.result?.company_info} />
      <Card7
        data1={data?.content?.result?.company_info}
        data2={
          sameCIN && bigData?.content?.result?.company_details?.data?.company
        }
        sameCIN={sameCIN}
      />
      <Card3
        heading={"Communication Details"}
        subHeadings={[
          "Registered Address",
          "Website",
          "Phone Number",
          "Email ID",
        ]}
        values={[
          data?.content?.result?.company_info["Address"]
            ?.split(";")
            ?.join(", "),
          sameCIN &&
            bigData?.content?.result?.company_details?.data.company?.website,
          sameCIN &&
            bigData?.content?.result?.company_details?.data.contact_details
              ?.phone[0]?.phoneNumber,
          data?.content?.result?.company_info["Email ID"],
        ]}
        sameCIN={sameCIN}
      /> */}
    </>
  );
};

export default Business;
