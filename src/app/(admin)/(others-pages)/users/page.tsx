import ComponentCard from "@/components/common/ComponentCard";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import UsersTable from "@/components/users/UsersTable";
import React from "react";

export default function Users() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Users" />
      <div className="space-y-6">
        <ComponentCard title="User Table ">
          <UsersTable />
        </ComponentCard>
      </div>
    </div>
  );
}
