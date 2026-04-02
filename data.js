/**
 * ============================================================
 *  FILE DỮ LIỆU BÁO CÁO THANH TOÁN — NHIỀU KỲ
 *  Trung tâm Công nghệ Cao Mobifone
 * ============================================================
 *  → Mỗi kỳ báo cáo mới: THÊM 1 PHẦN TỬ VÀO CUỐI MẢNG reports[]
 *  → index.html tự động lấy phần tử cuối cùng làm mặc định
 *  → Người dùng có thể chọn kỳ khác qua dropdown "Chọn ngày"
 * ============================================================
 */

const REPORT_DATA = {

  /* ── THÔNG TIN CHUNG (không đổi theo kỳ) ── */
  excelLabel: "Tải dữ liệu (.xlsx)",

  /* ── DANH SÁCH CÁC KỲ BÁO CÁO ──────────────────────────
   *  Thêm kỳ mới: copy khối { ... } cuối cùng, dán vào cuối
   *  mảng, rồi cập nhật số liệu.
   *  → index.html sẽ tự dùng phần tử CUỐI CÙNG làm mặc định.
   * ──────────────────────────────────────────────────────── */
  reports: [

    /* ══════════════ KỲ 1 ══════════════ */
    {
      title: "BÁO CÁO THANH TOÁN NĂM 2026",
      period: "1/1/2026 - 16/3/2026",
      label: "16/03/2026",
      excelFile: "data excel/Báo cáo thanh toán 16032026_1.xlsx",

      deptData: [
        { dept: "P.Tổng hợp", chiPhi: 6144, daTT: 4710, color: "#5b8fe8", light: "#dde9fc", bg: "#eff6ff", border: "#7aacef", text: "#4872c4" },
        { dept: "P.Khoa học công nghệ", chiPhi: 45, daTT: 45, color: "#4baa6e", light: "#c8eeda", bg: "#f0fdf4", border: "#6ec897", text: "#3a8a5a" },
        { dept: "P.Sản xuất công nghiệp", chiPhi: 1294, daTT: 138, color: "#e0a040", light: "#faeac8", bg: "#fffbeb", border: "#e8b86a", text: "#b87c2a" },
        { dept: "P.Bảo dưỡng thiết bị", chiPhi: 8412, daTT: 282, color: "#e06060", light: "#fadadb", bg: "#fff5f5", border: "#e89090", text: "#c04848" },
        { dept: "P.Đổi mới sáng tạo", chiPhi: 856, daTT: 0, color: "#9b74d8", light: "#e8dcf8", bg: "#f8f4ff", border: "#c0a0e8", text: "#7050b0" },
      ],

      statusData: [
        { dept: "P.Tổng hợp", daTT: 20, chuaNop: 28, boSung: 2, ktCheck: 0, dangTrinh: 0 },
        { dept: "P.Khoa học công nghệ", daTT: 0, chuaNop: 0, boSung: 0, ktCheck: 0, dangTrinh: 0 },
        { dept: "P.Sản xuất công nghiệp", daTT: 6, chuaNop: 3, boSung: 1, ktCheck: 0, dangTrinh: 2 },
        { dept: "P.Bảo dưỡng thiết bị", daTT: 24, chuaNop: 34, boSung: 5, ktCheck: 0, dangTrinh: 17 },
        { dept: "P.Đổi mới sáng tạo", daTT: 2, chuaNop: 3, boSung: 0, ktCheck: 6, dangTrinh: 2 },
      ],
    },

    /* ══════════════ KỲ 2 (MỚI NHẤT) ══════════════ */
    {
      title: "BÁO CÁO THANH TOÁN NĂM 2026",
      period: "1/1/2026 - 30/3/2026",
      label: "30/03/2026",
      excelFile: "data excel/Báo cáo thanh toán 30032026 (Autosaved).xlsx",

      deptData: [
        { dept: "P.Tổng hợp", chiPhi: 9734, daTT: 8942, color: "#5b8fe8", light: "#dde9fc", bg: "#eff6ff", border: "#7aacef", text: "#4872c4" },
        { dept: "P.Khoa học công nghệ", chiPhi: 90, daTT: 90, color: "#4baa6e", light: "#c8eeda", bg: "#f0fdf4", border: "#6ec897", text: "#3a8a5a" },
        { dept: "P.Sản xuất công nghiệp", chiPhi: 841, daTT: 214, color: "#e0a040", light: "#faeac8", bg: "#fffbeb", border: "#e8b86a", text: "#b87c2a" },
        { dept: "P.Bảo dưỡng thiết bị", chiPhi: 8523, daTT: 1611, color: "#e06060", light: "#fadadb", bg: "#fff5f5", border: "#e89090", text: "#c04848" },
        { dept: "P.Đổi mới sáng tạo", chiPhi: 870, daTT: 50, color: "#9b74d8", light: "#e8dcf8", bg: "#f8f4ff", border: "#c0a0e8", text: "#7050b0" },
      ],

      statusData: [
        { dept: "P.Tổng hợp", daTT: 51, chuaNop: 3, boSung: 6, ktCheck: 0, dangTrinh: 1 },
        { dept: "P.Khoa học công nghệ", daTT: 0, chuaNop: 0, boSung: 0, ktCheck: 0, dangTrinh: 0 },
        { dept: "P.Sản xuất công nghiệp", daTT: 8, chuaNop: 3, boSung: 1, ktCheck: 0, dangTrinh: 0 },
        { dept: "P.Bảo dưỡng thiết bị", daTT: 48, chuaNop: 24, boSung: 5, ktCheck: 1, dangTrinh: 6 },
        { dept: "P.Đổi mới sáng tạo", daTT: 13, chuaNop: 1, boSung: 0, ktCheck: 0, dangTrinh: 1 },
      ],
    },

    /* ══════════════ THÊM KỲ MỚI Ở ĐÂY ══════════════
     * Copy khối trên, dán xuống dưới, cập nhật số liệu.
     * index.html sẽ tự dùng phần tử CUỐI CÙNG làm mặc định.
    {
      title:     "BÁO CÁO THANH TOÁN NĂM 2026",
      period:    "1/1/2026 - 30/4/2026",
      label:     "30/04/2026",
      excelFile: "Báo cáo thanh toán 30042026.xlsx",
      deptData:  [ ... ],
      statusData:[ ... ],
    },
    * ════════════════════════════════════════════════ */

  ],

};
