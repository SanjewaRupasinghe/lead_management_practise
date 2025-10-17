export const API_BASE_URL =
  import.meta.env.VITE_API_URL || "http://localhost:8000/api";

export const ENDPOINTS = {
  // Auth
  LOGIN: "/auth/login",
  LOGOUT: "/auth/logout",
  REFRESH: "/auth/refresh",
  ME: "/auth/me",

  // Profile
  PROFILE: "/profile",
  CHANGE_PASSWORD: "/profile/change-password",

  // Admins (super_admin only)
  ADMINS: "/admins",
  ADMIN_BY_ID: (id: number) => `/admins/${id}`,
  ADMIN_STATUS: (id: number) => `/admins/${id}/status`,

  // Leads
  LEADS: "/leads",
  LEAD_BY_ID: (id: number) => `/leads/${id}`,
  ASSIGN_LEADS: "/leads/assign",
  MY_LEADS: "/leads/my-leads",

  // Remarks
  LEAD_REMARKS: (leadId: number) => `/leads/${leadId}/remarks`,
  REMARK_BY_ID: (leadId: number, remarkId: number) =>
    `/leads/${leadId}/remarks/${remarkId}`,
};
