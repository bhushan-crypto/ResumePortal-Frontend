'use client';

import React, { useEffect, useState } from "react";
import { useModal } from "../../hooks/useModal";
import { Modal } from "../ui/modal";
import Label from "../form/Label";
import Input from "../form/input/InputField";
import Button from "../ui/button/Button";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../ui/table";

// ✅ Job Interface
export interface Job {
  id?: number;
  title: string;
  description: string;
  client: string;
  skills: string[];
  salary: number;
  internalSalary: number;
  location: string;
  type: "FULL_TIME" | "PART_TIME" | "REMOTE" | "CONTRACT" | "INTERNSHIP" | "FREELANCER";
}

export default function JobsTable({ callApi }: { callApi: any }) {
  const [data, setData] = useState<Job[]>([]);
  const { isOpen, openModal, closeModal } = useModal();
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [formData, setFormData] = useState<Partial<Job>>({});

  // ✅ Fetch All Jobs
  const fetchJobs = async () => {
    const token = localStorage.getItem("token");
    const fetchUrl = "http://192.168.1.47:3001/jobs";

    try {
      const response = await fetch(fetchUrl, {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json"
        },
      });

      if (!response.ok) throw new Error("Failed to fetch jobs");

      const jobData = await response.json();
      setData(jobData.data || []);
    } catch (error) {
      console.error("Error fetching jobs:", error);
    }
  };

  // ✅ Delete Job
  const handleDelete = async (jobId: number) => {
    const token = localStorage.getItem("token");
    const idUrl = `http://192.168.1.47:3001/jobs/delete/${jobId}`;

    try {
      const response = await fetch(idUrl, {
        method: "DELETE",
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json"
        },
      });

      if (!response.ok) throw new Error("Failed to delete job");

      setData(prev => prev.filter(job => job.id !== jobId));
    } catch (error) {
      console.error("Error deleting job:", error);
    }
  };

  // ✅ Edit Job (Open Modal)
  const handleForm = (job: Job) => {
    setSelectedJob(job);
    setFormData({
      title: job.title,
      description: job.description,
      client: job.client,
      salary: job.salary,
      internalSalary: job.internalSalary,
      location: job.location,
      type: job.type,
    });
    openModal();
  };

  // ✅ Handle Input Change
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // ✅ Save Changes
  const handleSaveJob = async () => {
    if (!selectedJob) return;

    const updatedJob = { ...selectedJob, ...formData };
    const token = localStorage.getItem("token");

    try {
      const response = await fetch(`http://192.168.1.47:3001/jobs/update/${selectedJob.id}`, {
        method: "PUT",
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedJob),
      });

      if (!response.ok) throw new Error("Failed to update job");

      setData(prev =>
        prev.map(job => (job.id === selectedJob.id ? updatedJob : job))
      );
      closeModal();
    } catch (error) {
      console.error("Error updating job:", error);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, [callApi]);

  // ✅ Render Table
  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
      <div className="max-w-full overflow-x-auto">
        <div className="min-w-[1100px]">
          <Table>
            {/* Table Header */}
            <TableHeader className="border-b border-gray-100 dark:border-white/[0.05]">
              <TableRow>
                <TableCell isHeader className="px-5 py-3 font-medium text-start text-gray-500 text-theme-xs">Title</TableCell>
                <TableCell isHeader className="px-5 py-3 font-medium text-start text-gray-500 text-theme-xs">Client</TableCell>
                <TableCell isHeader className="px-5 py-3 font-medium text-start text-gray-500 text-theme-xs">Location</TableCell>
                <TableCell isHeader className="px-5 py-3 font-medium text-start text-gray-500 text-theme-xs">Type</TableCell>
                <TableCell isHeader className="px-5 py-3 font-medium text-start text-gray-500 text-theme-xs">Salary</TableCell>
                <TableCell isHeader className="px-5 py-3 font-medium text-start text-gray-500 text-theme-xs">Actions</TableCell>
              </TableRow>
            </TableHeader>

            {/* Table Body */}
            <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
              {data.map((job) => (
                <TableRow key={job.id}>
                  <TableCell className="px-5 py-4">{job.title}</TableCell>
                  <TableCell className="px-5 py-4">{job.client}</TableCell>
                  <TableCell className="px-5 py-4">{job.location}</TableCell>
                  <TableCell className="px-5 py-4">{job.type}</TableCell>
                  <TableCell className="px-5 py-4">₹{job.salary.toLocaleString()}</TableCell>
                  <TableCell className="px-5 py-4 flex gap-2">
                    <button
                      onClick={() => handleForm(job)}
                      className="px-[1vw] py-[.8vh] rounded-2xl text-xs border text-gray-800"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(job.id!)}
                      className="px-[1vw] py-[.8vh] rounded-2xl text-xs bg-red-500 text-white"
                    >
                      Delete
                    </button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>

      {/* ✅ Edit Modal */}
      <Modal isOpen={isOpen} onClose={closeModal} className="max-w-[700px] m-4">
        <div className="relative w-full rounded-3xl bg-white p-4 dark:bg-gray-900 lg:p-11">
          <h4 className="mb-2 text-2xl font-semibold text-gray-800 dark:text-white/90">
            Edit Job
          </h4>

          <form className="flex flex-col gap-4">
            <div>
              <Label>Title</Label>
              <Input name="title" value={formData.title || ""} onChange={handleChange} />
            </div>

            <div>
              <Label>Client</Label>
              <Input name="client" value={formData.client || ""} onChange={handleChange} />
            </div>

            <div>
              <Label>Location</Label>
              <Input name="location" value={formData.location || ""} onChange={handleChange} />
            </div>

            <div>
              <Label>Salary</Label>
              <Input name="salary" type="number" value={formData.salary?.toString() || ""} onChange={handleChange} />
            </div>

            <div>
              <Label>Type</Label>
              <select name="type" value={formData.type || ""} onChange={handleChange} className="w-full py-2 border-2 rounded-md px-3 outline-gray-200">
                <option value="">Select Type</option>
                <option value="FULL_TIME">Full Time</option>
                <option value="PART_TIME">Part Time</option>
                <option value="REMOTE">Remote</option>
                <option value="CONTRACT">Contract</option>
                <option value="INTERNSHIP">Internship</option>
                <option value="FREELANCER">Freelancer</option>
              </select>
            </div>

            <div className="flex justify-end gap-3 mt-6">
              <Button size="sm" variant="outline" onClick={closeModal}>
                Close
              </Button>
              <Button size="sm" onClick={handleSaveJob}>
                Save Job
              </Button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
}
