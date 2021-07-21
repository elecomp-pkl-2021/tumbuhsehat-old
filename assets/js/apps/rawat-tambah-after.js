var table_user;

var formData;

var data_edit = {};

$(document).ready(function () {});

app_rawat_tambah_after = {
  init: function () {
    //loaded();
    odontogram_after();
  },
};

var odontogram_after = function () {
  let check_jumlah = getcheckjumlah(id_pemeriksaan2, id_pasien2, date);

  if (check_jumlah > 0) {
    var data = JSON.parse(odontogramDataUtama);
    console.log("check_jumlah", data);
  } else {
    var data = [
      // satuKiri : [
      {
        id: "dental18",
        data: {
          C: "White",
          C_opacity: "0",
          T: "White",
          T_opacity: "0",
          B: "White",
          B_opacity: "0",
          R: "White",
          R_opacity: "0",
          L: "White",
          L_opacity: "0",
          F: "White",
          F_opacity: "0",
          G: "White",
          G_opacity: "0",
          H: "White",
          H_opacity: "0",
          I: "White",
          I_opacity: "0",
          J: "Black",
          J_opacity: "0",
          K: "White",
          K_opacity: "0",
          M: "0",
          M_opacity: "0",
          N: "White",
          N_opacity: "0",
          O: "White",
          O_opacity: "0",
          P: "White",
          P_opacity: "0",
          Q: "White",
          Q_opacity: "0",
          R: "White",
          R_opacity: "0",
          S: "White",
          S_opacity: "0",
          TV: "0",
          TV_opacity: "0",
          U: "0",
          U_opacity: "0",
          V: "0",
          V_opacity: "0",
          W: "White",
          W_opacity: "0",
          X: "White",
          X_opacity: "0",
          XA: "White",
          XA_opacity: "0",
          XB: "White",
          XB_opacity: "0",
          XC: "White",
          XC_opacity: "0",
          XD: "White",
          XD_opacity: "0",
          XE: "White",
          XE_opacity: "0",
          XF: "White",
          XF_opacity: "0",
          XG: "White",
          XG_opacity: "0",
          XH: "White",
          XH_opacity: "0",
          XI: "White",
          XI_opacity: "0",
          XJ: "White",
          XJ_opacity: "0",
          XK: "White",
          XK_opacity: "0",
          XL: "White",
          XL_opacity: "0",
          AB: "White",
          AB_opacity: "0",
          BA: "White",
          BA_opacity: "0",
          BB: "White",
          BB_opacity: "0",
          BC: "White",
          BC_opacity: "0",
          BD: "White",
          BD_opacity: "0",
          BE: "White",
          BE_opacity: "0",
          BF: "White",
          BF_opacity: "0",
          OPA: "0",
          OPA_opacity: "0",
          XM: "White",
          XM_opacity: "0",
          XN: "White",
          XN_opacity: "0",
          XO: "White",
          XO_opacity: "0",
          XP: "White",
          XP_opacity: "0",
          XQ: "White",
          XQ_opacity: "0",
          RD: "White",
        },
        transform1: "0",
        transform2: "0",
        title: "18",
        title_2: "",
        title_3: "",
        title_4: "",
        opacity: "0",
      },
      {
        id: "dental17",
        data: {
          C: "White",
          C_opacity: "0",
          T: "White",
          T_opacity: "0",
          B: "White",
          B_opacity: "0",
          R: "White",
          R_opacity: "0",
          L: "White",
          L_opacity: "0",
          F: "White",
          F_opacity: "0",
          G: "White",
          G_opacity: "0",
          H: "White",
          H_opacity: "0",
          I: "White",
          I_opacity: "0",
          J: "Black",
          J_opacity: "0",
          K: "White",
          K_opacity: "0",
          M: "0",
          M_opacity: "0",
          N: "White",
          N_opacity: "0",
          O: "White",
          O_opacity: "0",
          P: "White",
          P_opacity: "0",
          Q: "White",
          Q_opacity: "0",
          R: "White",
          R_opacity: "0",
          S: "White",
          S_opacity: "0",
          TV: "0",
          TV_opacity: "0",
          U: "0",
          U_opacity: "0",
          V: "0",
          V_opacity: "0",
          W: "White",
          W_opacity: "0",
          X: "White",
          X_opacity: "0",
          XA: "White",
          XA_opacity: "0",
          XB: "White",
          XB_opacity: "0",
          XC: "White",
          XC_opacity: "0",
          XD: "White",
          XD_opacity: "0",
          XE: "White",
          XE_opacity: "0",
          XF: "White",
          XF_opacity: "0",
          XG: "White",
          XG_opacity: "0",
          XH: "White",
          XH_opacity: "0",
          XI: "White",
          XI_opacity: "0",
          XJ: "White",
          XJ_opacity: "0",
          XK: "White",
          XK_opacity: "0",
          XL: "White",
          XL_opacity: "0",
          AB: "White",
          AB_opacity: "0",
          BA: "White",
          BA_opacity: "0",
          BB: "White",
          BB_opacity: "0",
          BC: "White",
          BC_opacity: "0",
          BD: "White",
          BD_opacity: "0",
          BE: "White",
          BE_opacity: "0",
          BF: "White",
          BF_opacity: "0",
          OPA: "0",
          OPA_opacity: "0",
          XM: "White",
          XM_opacity: "0",
          XN: "White",
          XN_opacity: "0",
          XO: "White",
          XO_opacity: "0",
          XP: "White",
          XP_opacity: "0",
          XQ: "White",
          XQ_opacity: "0",
          RD: "White",
        },
        transform1: "25",
        transform2: "0",
        title: "17",
        title_2: "",
        title_3: "",
        title_4: "",
        opacity: "0",
      },
      {
        id: "dental16",
        data: {
          C: "White",
          C_opacity: "0",
          T: "White",
          T_opacity: "0",
          B: "White",
          B_opacity: "0",
          R: "White",
          R_opacity: "0",
          L: "White",
          L_opacity: "0",
          F: "White",
          F_opacity: "0",
          G: "White",
          G_opacity: "0",
          H: "White",
          H_opacity: "0",
          I: "White",
          I_opacity: "0",
          J: "Black",
          J_opacity: "0",
          K: "White",
          K_opacity: "0",
          M: "0",
          M_opacity: "0",
          N: "White",
          N_opacity: "0",
          O: "White",
          O_opacity: "0",
          P: "White",
          P_opacity: "0",
          Q: "White",
          Q_opacity: "0",
          R: "White",
          R_opacity: "0",
          S: "White",
          S_opacity: "0",
          TV: "0",
          TV_opacity: "0",
          U: "0",
          U_opacity: "0",
          V: "0",
          V_opacity: "0",
          W: "White",
          W_opacity: "0",
          X: "White",
          X_opacity: "0",
          XA: "White",
          XA_opacity: "0",
          XB: "White",
          XB_opacity: "0",
          XC: "White",
          XC_opacity: "0",
          XD: "White",
          XD_opacity: "0",
          XE: "White",
          XE_opacity: "0",
          XF: "White",
          XF_opacity: "0",
          XG: "White",
          XG_opacity: "0",
          XH: "White",
          XH_opacity: "0",
          XI: "White",
          XI_opacity: "0",
          XJ: "White",
          XJ_opacity: "0",
          XK: "White",
          XK_opacity: "0",
          XL: "White",
          XL_opacity: "0",
          AB: "White",
          AB_opacity: "0",
          BA: "White",
          BA_opacity: "0",
          BB: "White",
          BB_opacity: "0",
          BC: "White",
          BC_opacity: "0",
          BD: "White",
          BD_opacity: "0",
          BE: "White",
          BE_opacity: "0",
          BF: "White",
          BF_opacity: "0",
          OPA: "0",
          OPA_opacity: "0",
          XM: "White",
          XM_opacity: "0",
          XN: "White",
          XN_opacity: "0",
          XO: "White",
          XO_opacity: "0",
          XP: "White",
          XP_opacity: "0",
          XQ: "White",
          XQ_opacity: "0",
          RD: "White",
        },
        transform1: "50",
        transform2: "0",
        title: "16",
        title_2: "",
        title_3: "",
        title_4: "",
        opacity: "0",
      },
      {
        id: "dental15",
        data: {
          C: "White",
          C_opacity: "0",
          T: "White",
          T_opacity: "0",
          B: "White",
          B_opacity: "0",
          R: "White",
          R_opacity: "0",
          L: "White",
          L_opacity: "0",
          F: "White",
          F_opacity: "0",
          G: "White",
          G_opacity: "0",
          H: "White",
          H_opacity: "0",
          I: "White",
          I_opacity: "0",
          J: "Black",
          J_opacity: "0",
          K: "White",
          K_opacity: "0",
          M: "0",
          M_opacity: "0",
          N: "White",
          N_opacity: "0",
          O: "White",
          O_opacity: "0",
          P: "White",
          P_opacity: "0",
          Q: "White",
          Q_opacity: "0",
          R: "White",
          R_opacity: "0",
          S: "White",
          S_opacity: "0",
          TV: "0",
          TV_opacity: "0",
          U: "0",
          U_opacity: "0",
          V: "0",
          V_opacity: "0",
          W: "White",
          W_opacity: "0",
          X: "White",
          X_opacity: "0",
          XA: "White",
          XA_opacity: "0",
          XB: "White",
          XB_opacity: "0",
          XC: "White",
          XC_opacity: "0",
          XD: "White",
          XD_opacity: "0",
          XE: "White",
          XE_opacity: "0",
          XF: "White",
          XF_opacity: "0",
          XG: "White",
          XG_opacity: "0",
          XH: "White",
          XH_opacity: "0",
          XI: "White",
          XI_opacity: "0",
          XJ: "White",
          XJ_opacity: "0",
          XK: "White",
          XK_opacity: "0",
          XL: "White",
          XL_opacity: "0",
          AB: "White",
          AB_opacity: "0",
          BA: "White",
          BA_opacity: "0",
          BB: "White",
          BB_opacity: "0",
          BC: "White",
          BC_opacity: "0",
          BD: "White",
          BD_opacity: "0",
          BE: "White",
          BE_opacity: "0",
          BF: "White",
          BF_opacity: "0",
          OPA: "0",
          OPA_opacity: "0",
          XM: "White",
          XM_opacity: "0",
          XN: "White",
          XN_opacity: "0",
          XO: "White",
          XO_opacity: "0",
          XP: "White",
          XP_opacity: "0",
          XQ: "White",
          XQ_opacity: "0",
          RD: "White",
        },
        transform1: "75",
        transform2: "0",
        title: "15",
        title_2: "",
        title_3: "",
        title_4: "",
        opacity: "0",
      },
      {
        id: "dental14",
        data: {
          C: "White",
          C_opacity: "0",
          T: "White",
          T_opacity: "0",
          B: "White",
          B_opacity: "0",
          R: "White",
          R_opacity: "0",
          L: "White",
          L_opacity: "0",
          F: "White",
          F_opacity: "0",
          G: "White",
          G_opacity: "0",
          H: "White",
          H_opacity: "0",
          I: "White",
          I_opacity: "0",
          J: "Black",
          J_opacity: "0",
          K: "White",
          K_opacity: "0",
          M: "0",
          M_opacity: "0",
          N: "White",
          N_opacity: "0",
          O: "White",
          O_opacity: "0",
          P: "White",
          P_opacity: "0",
          Q: "White",
          Q_opacity: "0",
          R: "White",
          R_opacity: "0",
          S: "White",
          S_opacity: "0",
          TV: "0",
          TV_opacity: "0",
          U: "0",
          U_opacity: "0",
          V: "0",
          V_opacity: "0",
          W: "White",
          W_opacity: "0",
          X: "White",
          X_opacity: "0",
          XA: "White",
          XA_opacity: "0",
          XB: "White",
          XB_opacity: "0",
          XC: "White",
          XC_opacity: "0",
          XD: "White",
          XD_opacity: "0",
          XE: "White",
          XE_opacity: "0",
          XF: "White",
          XF_opacity: "0",
          XG: "White",
          XG_opacity: "0",
          XH: "White",
          XH_opacity: "0",
          XI: "White",
          XI_opacity: "0",
          XJ: "White",
          XJ_opacity: "0",
          XK: "White",
          XK_opacity: "0",
          XL: "White",
          XL_opacity: "0",
          AB: "White",
          AB_opacity: "0",
          BA: "White",
          BA_opacity: "0",
          BB: "White",
          BB_opacity: "0",
          BC: "White",
          BC_opacity: "0",
          BD: "White",
          BD_opacity: "0",
          BE: "White",
          BE_opacity: "0",
          BF: "White",
          BF_opacity: "0",
          OPA: "0",
          OPA_opacity: "0",
          XM: "White",
          XM_opacity: "0",
          XN: "White",
          XN_opacity: "0",
          XO: "White",
          XO_opacity: "0",
          XP: "White",
          XP_opacity: "0",
          XQ: "White",
          XQ_opacity: "0",
          RD: "White",
        },
        transform1: "100",
        transform2: "0",
        title: "14",
        title_2: "",
        title_3: "",
        title_4: "",
        opacity: "0",
      },
      {
        id: "dental13",
        data: {
          C: "White",
          C_opacity: "0",
          T: "White",
          T_opacity: "0",
          B: "White",
          B_opacity: "0",
          R: "White",
          R_opacity: "0",
          L: "White",
          L_opacity: "0",
          F: "White",
          F_opacity: "0",
          G: "White",
          G_opacity: "0",
          H: "White",
          H_opacity: "0",
          I: "White",
          I_opacity: "0",
          J: "Black",
          J_opacity: "0",
          K: "White",
          K_opacity: "0",
          M: "0",
          M_opacity: "0",
          N: "White",
          N_opacity: "0",
          O: "White",
          O_opacity: "0",
          P: "White",
          P_opacity: "0",
          Q: "White",
          Q_opacity: "0",
          R: "White",
          R_opacity: "0",
          S: "White",
          S_opacity: "0",
          TV: "0",
          TV_opacity: "0",
          U: "0",
          U_opacity: "0",
          V: "0",
          V_opacity: "0",
          W: "White",
          W_opacity: "0",
          X: "White",
          X_opacity: "0",
          XA: "White",
          XA_opacity: "0",
          XB: "White",
          XB_opacity: "0",
          XC: "White",
          XC_opacity: "0",
          XD: "White",
          XD_opacity: "0",
          XE: "White",
          XE_opacity: "0",
          XF: "White",
          XF_opacity: "0",
          XG: "White",
          XG_opacity: "0",
          XH: "White",
          XH_opacity: "0",
          XI: "White",
          XI_opacity: "0",
          XJ: "White",
          XJ_opacity: "0",
          XK: "White",
          XK_opacity: "0",
          XL: "White",
          XL_opacity: "0",
          AB: "White",
          AB_opacity: "0",
          BA: "White",
          BA_opacity: "0",
          BB: "White",
          BB_opacity: "0",
          BC: "White",
          BC_opacity: "0",
          BD: "White",
          BD_opacity: "0",
          BE: "White",
          BE_opacity: "0",
          BF: "White",
          BF_opacity: "0",
          OPA: "0",
          OPA_opacity: "0",
          XM: "White",
          XM_opacity: "0",
          XN: "White",
          XN_opacity: "0",
          XO: "White",
          XO_opacity: "0",
          XP: "White",
          XP_opacity: "0",
          XQ: "White",
          XQ_opacity: "0",
          RD: "White",
        },
        transform1: "125",
        transform2: "0",
        title: "13",
        title_2: "",
        title_3: "",
        title_4: "",
        opacity: "0",
      },
      {
        id: "dental12",
        data: {
          C: "White",
          C_opacity: "0",
          T: "White",
          T_opacity: "0",
          B: "White",
          B_opacity: "0",
          R: "White",
          R_opacity: "0",
          L: "White",
          L_opacity: "0",
          F: "White",
          F_opacity: "0",
          G: "White",
          G_opacity: "0",
          H: "White",
          H_opacity: "0",
          I: "White",
          I_opacity: "0",
          J: "Black",
          J_opacity: "0",
          K: "White",
          K_opacity: "0",
          M: "0",
          M_opacity: "0",
          N: "White",
          N_opacity: "0",
          O: "White",
          O_opacity: "0",
          P: "White",
          P_opacity: "0",
          Q: "White",
          Q_opacity: "0",
          R: "White",
          R_opacity: "0",
          S: "White",
          S_opacity: "0",
          TV: "0",
          TV_opacity: "0",
          U: "0",
          U_opacity: "0",
          V: "0",
          V_opacity: "0",
          W: "White",
          W_opacity: "0",
          X: "White",
          X_opacity: "0",
          XA: "White",
          XA_opacity: "0",
          XB: "White",
          XB_opacity: "0",
          XC: "White",
          XC_opacity: "0",
          XD: "White",
          XD_opacity: "0",
          XE: "White",
          XE_opacity: "0",
          XF: "White",
          XF_opacity: "0",
          XG: "White",
          XG_opacity: "0",
          XH: "White",
          XH_opacity: "0",
          XI: "White",
          XI_opacity: "0",
          XJ: "White",
          XJ_opacity: "0",
          XK: "White",
          XK_opacity: "0",
          XL: "White",
          XL_opacity: "0",
          AB: "White",
          AB_opacity: "0",
          BA: "White",
          BA_opacity: "0",
          BB: "White",
          BB_opacity: "0",
          BC: "White",
          BC_opacity: "0",
          BD: "White",
          BD_opacity: "0",
          BE: "White",
          BE_opacity: "0",
          BF: "White",
          BF_opacity: "0",
          OPA: "0",
          OPA_opacity: "0",
          XM: "White",
          XM_opacity: "0",
          XN: "White",
          XN_opacity: "0",
          XO: "White",
          XO_opacity: "0",
          XP: "White",
          XP_opacity: "0",
          XQ: "White",
          XQ_opacity: "0",
          RD: "White",
        },
        transform1: "150",
        transform2: "0",
        title: "12",
        title_2: "",
        title_3: "",
        title_4: "",
        opacity: "0",
      },
      {
        id: "dental11",
        data: {
          C: "White",
          C_opacity: "0",
          T: "White",
          T_opacity: "0",
          B: "White",
          B_opacity: "0",
          R: "White",
          R_opacity: "0",
          L: "White",
          L_opacity: "0",
          F: "White",
          F_opacity: "0",
          G: "White",
          G_opacity: "0",
          H: "White",
          H_opacity: "0",
          I: "White",
          I_opacity: "0",
          J: "Black",
          J_opacity: "0",
          K: "White",
          K_opacity: "0",
          M: "0",
          M_opacity: "0",
          N: "White",
          N_opacity: "0",
          O: "White",
          O_opacity: "0",
          P: "White",
          P_opacity: "0",
          Q: "White",
          Q_opacity: "0",
          R: "White",
          R_opacity: "0",
          S: "White",
          S_opacity: "0",
          TV: "0",
          TV_opacity: "0",
          U: "0",
          U_opacity: "0",
          V: "0",
          V_opacity: "0",
          W: "White",
          W_opacity: "0",
          X: "White",
          X_opacity: "0",
          XA: "White",
          XA_opacity: "0",
          XB: "White",
          XB_opacity: "0",
          XC: "White",
          XC_opacity: "0",
          XD: "White",
          XD_opacity: "0",
          XE: "White",
          XE_opacity: "0",
          XF: "White",
          XF_opacity: "0",
          XG: "White",
          XG_opacity: "0",
          XH: "White",
          XH_opacity: "0",
          XI: "White",
          XI_opacity: "0",
          XJ: "White",
          XJ_opacity: "0",
          XK: "White",
          XK_opacity: "0",
          XL: "White",
          XL_opacity: "0",
          AB: "White",
          AB_opacity: "0",
          BA: "White",
          BA_opacity: "0",
          BB: "White",
          BB_opacity: "0",
          BC: "White",
          BC_opacity: "0",
          BD: "White",
          BD_opacity: "0",
          BE: "White",
          BE_opacity: "0",
          BF: "White",
          BF_opacity: "0",
          OPA: "0",
          OPA_opacity: "0",
          XM: "White",
          XM_opacity: "0",
          XN: "White",
          XN_opacity: "0",
          XO: "White",
          XO_opacity: "0",
          XP: "White",
          XP_opacity: "0",
          XQ: "White",
          XQ_opacity: "0",
          RD: "White",
        },
        transform1: "175",
        transform2: "0",
        title: "11",
        title_2: "",
        title_3: "",
        title_4: "",
        opacity: "0",
      },
      // ],
      // satuKanan : [
      {
        id: "dental21",
        data: {
          C: "White",
          C_opacity: "0",
          T: "White",
          T_opacity: "0",
          B: "White",
          B_opacity: "0",
          R: "White",
          R_opacity: "0",
          L: "White",
          L_opacity: "0",
          F: "White",
          F_opacity: "0",
          G: "White",
          G_opacity: "0",
          H: "White",
          H_opacity: "0",
          I: "White",
          I_opacity: "0",
          J: "Black",
          J_opacity: "0",
          K: "White",
          K_opacity: "0",
          M: "0",
          M_opacity: "0",
          N: "White",
          N_opacity: "0",
          O: "White",
          O_opacity: "0",
          P: "White",
          P_opacity: "0",
          Q: "White",
          Q_opacity: "0",
          R: "White",
          R_opacity: "0",
          S: "White",
          S_opacity: "0",
          TV: "0",
          TV_opacity: "0",
          U: "0",
          U_opacity: "0",
          V: "0",
          V_opacity: "0",
          W: "White",
          W_opacity: "0",
          X: "White",
          X_opacity: "0",
          XA: "White",
          XA_opacity: "0",
          XB: "White",
          XB_opacity: "0",
          XC: "White",
          XC_opacity: "0",
          XD: "White",
          XD_opacity: "0",
          XE: "White",
          XE_opacity: "0",
          XF: "White",
          XF_opacity: "0",
          XG: "White",
          XG_opacity: "0",
          XH: "White",
          XH_opacity: "0",
          XI: "White",
          XI_opacity: "0",
          XJ: "White",
          XJ_opacity: "0",
          XK: "White",
          XK_opacity: "0",
          XL: "White",
          XL_opacity: "0",
          AB: "White",
          AB_opacity: "0",
          BA: "White",
          BA_opacity: "0",
          BB: "White",
          BB_opacity: "0",
          BC: "White",
          BC_opacity: "0",
          BD: "White",
          BD_opacity: "0",
          BE: "White",
          BE_opacity: "0",
          BF: "White",
          BF_opacity: "0",
          OPA: "0",
          OPA_opacity: "0",
          XM: "White",
          XM_opacity: "0",
          XN: "White",
          XN_opacity: "0",
          XO: "White",
          XO_opacity: "0",
          XP: "White",
          XP_opacity: "0",
          XQ: "White",
          XQ_opacity: "0",
          RD: "White",
        },
        transform1: "210",
        transform2: "0",
        title: "21",
        title_2: "",
        title_3: "",
        title_4: "",
        opacity: "0",
      },
      {
        id: "dental22",
        data: {
          C: "White",
          C_opacity: "0",
          T: "White",
          T_opacity: "0",
          B: "White",
          B_opacity: "0",
          R: "White",
          R_opacity: "0",
          L: "White",
          L_opacity: "0",
          F: "White",
          F_opacity: "0",
          G: "White",
          G_opacity: "0",
          H: "White",
          H_opacity: "0",
          I: "White",
          I_opacity: "0",
          J: "Black",
          J_opacity: "0",
          K: "White",
          K_opacity: "0",
          M: "0",
          M_opacity: "0",
          N: "White",
          N_opacity: "0",
          O: "White",
          O_opacity: "0",
          P: "White",
          P_opacity: "0",
          Q: "White",
          Q_opacity: "0",
          R: "White",
          R_opacity: "0",
          S: "White",
          S_opacity: "0",
          TV: "0",
          TV_opacity: "0",
          U: "0",
          U_opacity: "0",
          V: "0",
          V_opacity: "0",
          W: "White",
          W_opacity: "0",
          X: "White",
          X_opacity: "0",
          XA: "White",
          XA_opacity: "0",
          XB: "White",
          XB_opacity: "0",
          XC: "White",
          XC_opacity: "0",
          XD: "White",
          XD_opacity: "0",
          XE: "White",
          XE_opacity: "0",
          XF: "White",
          XF_opacity: "0",
          XG: "White",
          XG_opacity: "0",
          XH: "White",
          XH_opacity: "0",
          XI: "White",
          XI_opacity: "0",
          XJ: "White",
          XJ_opacity: "0",
          XK: "White",
          XK_opacity: "0",
          XL: "White",
          XL_opacity: "0",
          AB: "White",
          AB_opacity: "0",
          BA: "White",
          BA_opacity: "0",
          BB: "White",
          BB_opacity: "0",
          BC: "White",
          BC_opacity: "0",
          BD: "White",
          BD_opacity: "0",
          BE: "White",
          BE_opacity: "0",
          BF: "White",
          BF_opacity: "0",
          OPA: "0",
          OPA_opacity: "0",
          XM: "White",
          XM_opacity: "0",
          XN: "White",
          XN_opacity: "0",
          XO: "White",
          XO_opacity: "0",
          XP: "White",
          XP_opacity: "0",
          XQ: "White",
          XQ_opacity: "0",
          RD: "White",
        },
        transform1: "235",
        transform2: "0",
        title: "22",
        title_2: "",
        title_3: "",
        title_4: "",
        opacity: "0",
      },
      {
        id: "dental23",
        data: {
          C: "White",
          C_opacity: "0",
          T: "White",
          T_opacity: "0",
          B: "White",
          B_opacity: "0",
          R: "White",
          R_opacity: "0",
          L: "White",
          L_opacity: "0",
          F: "White",
          F_opacity: "0",
          G: "White",
          G_opacity: "0",
          H: "White",
          H_opacity: "0",
          I: "White",
          I_opacity: "0",
          J: "Black",
          J_opacity: "0",
          K: "White",
          K_opacity: "0",
          M: "0",
          M_opacity: "0",
          N: "White",
          N_opacity: "0",
          O: "White",
          O_opacity: "0",
          P: "White",
          P_opacity: "0",
          Q: "White",
          Q_opacity: "0",
          R: "White",
          R_opacity: "0",
          S: "White",
          S_opacity: "0",
          TV: "0",
          TV_opacity: "0",
          U: "0",
          U_opacity: "0",
          V: "0",
          V_opacity: "0",
          W: "White",
          W_opacity: "0",
          X: "White",
          X_opacity: "0",
          XA: "White",
          XA_opacity: "0",
          XB: "White",
          XB_opacity: "0",
          XC: "White",
          XC_opacity: "0",
          XD: "White",
          XD_opacity: "0",
          XE: "White",
          XE_opacity: "0",
          XF: "White",
          XF_opacity: "0",
          XG: "White",
          XG_opacity: "0",
          XH: "White",
          XH_opacity: "0",
          XI: "White",
          XI_opacity: "0",
          XJ: "White",
          XJ_opacity: "0",
          XK: "White",
          XK_opacity: "0",
          XL: "White",
          XL_opacity: "0",
          AB: "White",
          AB_opacity: "0",
          BA: "White",
          BA_opacity: "0",
          BB: "White",
          BB_opacity: "0",
          BC: "White",
          BC_opacity: "0",
          BD: "White",
          BD_opacity: "0",
          BE: "White",
          BE_opacity: "0",
          BF: "White",
          BF_opacity: "0",
          OPA: "0",
          OPA_opacity: "0",
          XM: "White",
          XM_opacity: "0",
          XN: "White",
          XN_opacity: "0",
          XO: "White",
          XO_opacity: "0",
          XP: "White",
          XP_opacity: "0",
          XQ: "White",
          XQ_opacity: "0",
          RD: "White",
        },
        transform1: "260",
        transform2: "0",
        title: "23",
        title_2: "",
        title_3: "",
        title_4: "",
        opacity: "0",
      },
      {
        id: "dental24",
        data: {
          C: "White",
          C_opacity: "0",
          T: "White",
          T_opacity: "0",
          B: "White",
          B_opacity: "0",
          R: "White",
          R_opacity: "0",
          L: "White",
          L_opacity: "0",
          F: "White",
          F_opacity: "0",
          G: "White",
          G_opacity: "0",
          H: "White",
          H_opacity: "0",
          I: "White",
          I_opacity: "0",
          J: "Black",
          J_opacity: "0",
          K: "White",
          K_opacity: "0",
          M: "0",
          M_opacity: "0",
          N: "White",
          N_opacity: "0",
          O: "White",
          O_opacity: "0",
          P: "White",
          P_opacity: "0",
          Q: "White",
          Q_opacity: "0",
          R: "White",
          R_opacity: "0",
          S: "White",
          S_opacity: "0",
          TV: "0",
          TV_opacity: "0",
          U: "0",
          U_opacity: "0",
          V: "0",
          V_opacity: "0",
          W: "White",
          W_opacity: "0",
          X: "White",
          X_opacity: "0",
          XA: "White",
          XA_opacity: "0",
          XB: "White",
          XB_opacity: "0",
          XC: "White",
          XC_opacity: "0",
          XD: "White",
          XD_opacity: "0",
          XE: "White",
          XE_opacity: "0",
          XF: "White",
          XF_opacity: "0",
          XG: "White",
          XG_opacity: "0",
          XH: "White",
          XH_opacity: "0",
          XI: "White",
          XI_opacity: "0",
          XJ: "White",
          XJ_opacity: "0",
          XK: "White",
          XK_opacity: "0",
          XL: "White",
          XL_opacity: "0",
          AB: "White",
          AB_opacity: "0",
          BA: "White",
          BA_opacity: "0",
          BB: "White",
          BB_opacity: "0",
          BC: "White",
          BC_opacity: "0",
          BD: "White",
          BD_opacity: "0",
          BE: "White",
          BE_opacity: "0",
          BF: "White",
          BF_opacity: "0",
          OPA: "0",
          OPA_opacity: "0",
          XM: "White",
          XM_opacity: "0",
          XN: "White",
          XN_opacity: "0",
          XO: "White",
          XO_opacity: "0",
          XP: "White",
          XP_opacity: "0",
          XQ: "White",
          XQ_opacity: "0",
          RD: "White",
        },
        transform1: "285",
        transform2: "0",
        title: "24",
        title_2: "",
        title_3: "",
        title_4: "",
        opacity: "0",
      },
      {
        id: "dental25",
        data: {
          C: "White",
          C_opacity: "0",
          T: "White",
          T_opacity: "0",
          B: "White",
          B_opacity: "0",
          R: "White",
          R_opacity: "0",
          L: "White",
          L_opacity: "0",
          F: "White",
          F_opacity: "0",
          G: "White",
          G_opacity: "0",
          H: "White",
          H_opacity: "0",
          I: "White",
          I_opacity: "0",
          J: "Black",
          J_opacity: "0",
          K: "White",
          K_opacity: "0",
          M: "0",
          M_opacity: "0",
          N: "White",
          N_opacity: "0",
          O: "White",
          O_opacity: "0",
          P: "White",
          P_opacity: "0",
          Q: "White",
          Q_opacity: "0",
          R: "White",
          R_opacity: "0",
          S: "White",
          S_opacity: "0",
          TV: "0",
          TV_opacity: "0",
          U: "0",
          U_opacity: "0",
          V: "0",
          V_opacity: "0",
          W: "White",
          W_opacity: "0",
          X: "White",
          X_opacity: "0",
          XA: "White",
          XA_opacity: "0",
          XB: "White",
          XB_opacity: "0",
          XC: "White",
          XC_opacity: "0",
          XD: "White",
          XD_opacity: "0",
          XE: "White",
          XE_opacity: "0",
          XF: "White",
          XF_opacity: "0",
          XG: "White",
          XG_opacity: "0",
          XH: "White",
          XH_opacity: "0",
          XI: "White",
          XI_opacity: "0",
          XJ: "White",
          XJ_opacity: "0",
          XK: "White",
          XK_opacity: "0",
          XL: "White",
          XL_opacity: "0",
          AB: "White",
          AB_opacity: "0",
          BA: "White",
          BA_opacity: "0",
          BB: "White",
          BB_opacity: "0",
          BC: "White",
          BC_opacity: "0",
          BD: "White",
          BD_opacity: "0",
          BE: "White",
          BE_opacity: "0",
          BF: "White",
          BF_opacity: "0",
          OPA: "0",
          OPA_opacity: "0",
          XM: "White",
          XM_opacity: "0",
          XN: "White",
          XN_opacity: "0",
          XO: "White",
          XO_opacity: "0",
          XP: "White",
          XP_opacity: "0",
          XQ: "White",
          XQ_opacity: "0",
          RD: "White",
        },
        transform1: "310",
        transform2: "0",
        title: "25",
        title_2: "",
        title_3: "",
        title_4: "",
        opacity: "0",
      },
      {
        id: "dental26",
        data: {
          C: "White",
          C_opacity: "0",
          T: "White",
          T_opacity: "0",
          B: "White",
          B_opacity: "0",
          R: "White",
          R_opacity: "0",
          L: "White",
          L_opacity: "0",
          F: "White",
          F_opacity: "0",
          G: "White",
          G_opacity: "0",
          H: "White",
          H_opacity: "0",
          I: "White",
          I_opacity: "0",
          J: "Black",
          J_opacity: "0",
          K: "White",
          K_opacity: "0",
          M: "0",
          M_opacity: "0",
          N: "White",
          N_opacity: "0",
          O: "White",
          O_opacity: "0",
          P: "White",
          P_opacity: "0",
          Q: "White",
          Q_opacity: "0",
          R: "White",
          R_opacity: "0",
          S: "White",
          S_opacity: "0",
          TV: "0",
          TV_opacity: "0",
          U: "0",
          U_opacity: "0",
          V: "0",
          V_opacity: "0",
          W: "White",
          W_opacity: "0",
          X: "White",
          X_opacity: "0",
          XA: "White",
          XA_opacity: "0",
          XB: "White",
          XB_opacity: "0",
          XC: "White",
          XC_opacity: "0",
          XD: "White",
          XD_opacity: "0",
          XE: "White",
          XE_opacity: "0",
          XF: "White",
          XF_opacity: "0",
          XG: "White",
          XG_opacity: "0",
          XH: "White",
          XH_opacity: "0",
          XI: "White",
          XI_opacity: "0",
          XJ: "White",
          XJ_opacity: "0",
          XK: "White",
          XK_opacity: "0",
          XL: "White",
          XL_opacity: "0",
          AB: "White",
          AB_opacity: "0",
          BA: "White",
          BA_opacity: "0",
          BB: "White",
          BB_opacity: "0",
          BC: "White",
          BC_opacity: "0",
          BD: "White",
          BD_opacity: "0",
          BE: "White",
          BE_opacity: "0",
          BF: "White",
          BF_opacity: "0",
          OPA: "0",
          OPA_opacity: "0",
          XM: "White",
          XM_opacity: "0",
          XN: "White",
          XN_opacity: "0",
          XO: "White",
          XO_opacity: "0",
          XP: "White",
          XP_opacity: "0",
          XQ: "White",
          XQ_opacity: "0",
          RD: "White",
        },
        transform1: "335",
        transform2: "0",
        title: "26",
        title_2: "",
        title_3: "",
        title_4: "",
        opacity: "0",
      },
      {
        id: "dental27",
        data: {
          C: "White",
          C_opacity: "0",
          T: "White",
          T_opacity: "0",
          B: "White",
          B_opacity: "0",
          R: "White",
          R_opacity: "0",
          L: "White",
          L_opacity: "0",
          F: "White",
          F_opacity: "0",
          G: "White",
          G_opacity: "0",
          H: "White",
          H_opacity: "0",
          I: "White",
          I_opacity: "0",
          J: "Black",
          J_opacity: "0",
          K: "White",
          K_opacity: "0",
          M: "0",
          M_opacity: "0",
          N: "White",
          N_opacity: "0",
          O: "White",
          O_opacity: "0",
          P: "White",
          P_opacity: "0",
          Q: "White",
          Q_opacity: "0",
          R: "White",
          R_opacity: "0",
          S: "White",
          S_opacity: "0",
          TV: "0",
          TV_opacity: "0",
          U: "0",
          U_opacity: "0",
          V: "0",
          V_opacity: "0",
          W: "White",
          W_opacity: "0",
          X: "White",
          X_opacity: "0",
          XA: "White",
          XA_opacity: "0",
          XB: "White",
          XB_opacity: "0",
          XC: "White",
          XC_opacity: "0",
          XD: "White",
          XD_opacity: "0",
          XE: "White",
          XE_opacity: "0",
          XF: "White",
          XF_opacity: "0",
          XG: "White",
          XG_opacity: "0",
          XH: "White",
          XH_opacity: "0",
          XI: "White",
          XI_opacity: "0",
          XJ: "White",
          XJ_opacity: "0",
          XK: "White",
          XK_opacity: "0",
          XL: "White",
          XL_opacity: "0",
          AB: "White",
          AB_opacity: "0",
          BA: "White",
          BA_opacity: "0",
          BB: "White",
          BB_opacity: "0",
          BC: "White",
          BC_opacity: "0",
          BD: "White",
          BD_opacity: "0",
          BE: "White",
          BE_opacity: "0",
          BF: "White",
          BF_opacity: "0",
          OPA: "0",
          OPA_opacity: "0",
          XM: "White",
          XM_opacity: "0",
          XN: "White",
          XN_opacity: "0",
          XO: "White",
          XO_opacity: "0",
          XP: "White",
          XP_opacity: "0",
          XQ: "White",
          XQ_opacity: "0",
          RD: "White",
        },
        transform1: "360",
        transform2: "0",
        title: "27",
        title_2: "",
        title_3: "",
        title_4: "",
        opacity: "0",
      },
      {
        id: "dental28",
        data: {
          C: "White",
          C_opacity: "0",
          T: "White",
          T_opacity: "0",
          B: "White",
          B_opacity: "0",
          R: "White",
          R_opacity: "0",
          L: "White",
          L_opacity: "0",
          F: "White",
          F_opacity: "0",
          G: "White",
          G_opacity: "0",
          H: "White",
          H_opacity: "0",
          I: "White",
          I_opacity: "0",
          J: "Black",
          J_opacity: "0",
          K: "White",
          K_opacity: "0",
          M: "0",
          M_opacity: "0",
          N: "White",
          N_opacity: "0",
          O: "White",
          O_opacity: "0",
          P: "White",
          P_opacity: "0",
          Q: "White",
          Q_opacity: "0",
          R: "White",
          R_opacity: "0",
          S: "White",
          S_opacity: "0",
          TV: "0",
          TV_opacity: "0",
          U: "0",
          U_opacity: "0",
          V: "0",
          V_opacity: "0",
          W: "White",
          W_opacity: "0",
          X: "White",
          X_opacity: "0",
          XA: "White",
          XA_opacity: "0",
          XB: "White",
          XB_opacity: "0",
          XC: "White",
          XC_opacity: "0",
          XD: "White",
          XD_opacity: "0",
          XE: "White",
          XE_opacity: "0",
          XF: "White",
          XF_opacity: "0",
          XG: "White",
          XG_opacity: "0",
          XH: "White",
          XH_opacity: "0",
          XI: "White",
          XI_opacity: "0",
          XJ: "White",
          XJ_opacity: "0",
          XK: "White",
          XK_opacity: "0",
          XL: "White",
          XL_opacity: "0",
          AB: "White",
          AB_opacity: "0",
          BA: "White",
          BA_opacity: "0",
          BB: "White",
          BB_opacity: "0",
          BC: "White",
          BC_opacity: "0",
          BD: "White",
          BD_opacity: "0",
          BE: "White",
          BE_opacity: "0",
          BF: "White",
          BF_opacity: "0",
          OPA: "0",
          OPA_opacity: "0",
          XM: "White",
          XM_opacity: "0",
          XN: "White",
          XN_opacity: "0",
          XO: "White",
          XO_opacity: "0",
          XP: "White",
          XP_opacity: "0",
          XQ: "White",
          XQ_opacity: "0",
          RD: "White",
        },
        transform1: "385",
        transform2: "0",
        title: "28",
        title_2: "",
        title_3: "",
        title_4: "",
        opacity: "0",
      },
      // ],
      // duaKiri : [
      {
        id: "dental55",
        data: {
          C: "White",
          C_opacity: "0",
          T: "White",
          T_opacity: "0",
          B: "White",
          B_opacity: "0",
          R: "White",
          R_opacity: "0",
          L: "White",
          L_opacity: "0",
          F: "White",
          F_opacity: "0",
          G: "White",
          G_opacity: "0",
          H: "White",
          H_opacity: "0",
          I: "White",
          I_opacity: "0",
          J: "Black",
          J_opacity: "0",
          K: "White",
          K_opacity: "0",
          M: "0",
          M_opacity: "0",
          N: "White",
          N_opacity: "0",
          O: "White",
          O_opacity: "0",
          P: "White",
          P_opacity: "0",
          Q: "White",
          Q_opacity: "0",
          R: "White",
          R_opacity: "0",
          S: "White",
          S_opacity: "0",
          TV: "0",
          TV_opacity: "0",
          U: "0",
          U_opacity: "0",
          V: "0",
          V_opacity: "0",
          W: "White",
          W_opacity: "0",
          X: "White",
          X_opacity: "0",
          XA: "White",
          XA_opacity: "0",
          XB: "White",
          XB_opacity: "0",
          XC: "White",
          XC_opacity: "0",
          XD: "White",
          XD_opacity: "0",
          XE: "White",
          XE_opacity: "0",
          XF: "White",
          XF_opacity: "0",
          XG: "White",
          XG_opacity: "0",
          XH: "White",
          XH_opacity: "0",
          XI: "White",
          XI_opacity: "0",
          XJ: "White",
          XJ_opacity: "0",
          XK: "White",
          XK_opacity: "0",
          XL: "White",
          XL_opacity: "0",
          AB: "White",
          AB_opacity: "0",
          BA: "White",
          BA_opacity: "0",
          BB: "White",
          BB_opacity: "0",
          BC: "White",
          BC_opacity: "0",
          BD: "White",
          BD_opacity: "0",
          BE: "White",
          BE_opacity: "0",
          BF: "White",
          BF_opacity: "0",
          OPA: "0",
          OPA_opacity: "0",
          XM: "White",
          XM_opacity: "0",
          XN: "White",
          XN_opacity: "0",
          XO: "White",
          XO_opacity: "0",
          XP: "White",
          XP_opacity: "0",
          XQ: "White",
          XQ_opacity: "0",
          RD: "White",
        },
        transform1: "75",
        transform2: "55",
        title: "55",
        title_2: "",
        title_3: "",
        title_4: "",
        opacity: "0",
      },
      {
        id: "dental54",
        data: {
          C: "White",
          C_opacity: "0",
          T: "White",
          T_opacity: "0",
          B: "White",
          B_opacity: "0",
          R: "White",
          R_opacity: "0",
          L: "White",
          L_opacity: "0",
          F: "White",
          F_opacity: "0",
          G: "White",
          G_opacity: "0",
          H: "White",
          H_opacity: "0",
          I: "White",
          I_opacity: "0",
          J: "Black",
          J_opacity: "0",
          K: "White",
          K_opacity: "0",
          M: "0",
          M_opacity: "0",
          N: "White",
          N_opacity: "0",
          O: "White",
          O_opacity: "0",
          P: "White",
          P_opacity: "0",
          Q: "White",
          Q_opacity: "0",
          R: "White",
          R_opacity: "0",
          S: "White",
          S_opacity: "0",
          TV: "0",
          TV_opacity: "0",
          U: "0",
          U_opacity: "0",
          V: "0",
          V_opacity: "0",
          W: "White",
          W_opacity: "0",
          X: "White",
          X_opacity: "0",
          XA: "White",
          XA_opacity: "0",
          XB: "White",
          XB_opacity: "0",
          XC: "White",
          XC_opacity: "0",
          XD: "White",
          XD_opacity: "0",
          XE: "White",
          XE_opacity: "0",
          XF: "White",
          XF_opacity: "0",
          XG: "White",
          XG_opacity: "0",
          XH: "White",
          XH_opacity: "0",
          XI: "White",
          XI_opacity: "0",
          XJ: "White",
          XJ_opacity: "0",
          XK: "White",
          XK_opacity: "0",
          XL: "White",
          XL_opacity: "0",
          AB: "White",
          AB_opacity: "0",
          BA: "White",
          BA_opacity: "0",
          BB: "White",
          BB_opacity: "0",
          BC: "White",
          BC_opacity: "0",
          BD: "White",
          BD_opacity: "0",
          BE: "White",
          BE_opacity: "0",
          BF: "White",
          BF_opacity: "0",
          OPA: "0",
          OPA_opacity: "0",
          XM: "White",
          XM_opacity: "0",
          XN: "White",
          XN_opacity: "0",
          XO: "White",
          XO_opacity: "0",
          XP: "White",
          XP_opacity: "0",
          XQ: "White",
          XQ_opacity: "0",
          RD: "White",
        },
        transform1: "100",
        transform2: "55",
        title: "54",
        title_2: "",
        title_3: "",
        title_4: "",
        opacity: "0",
      },
      {
        id: "dental53",
        data: {
          C: "White",
          C_opacity: "0",
          T: "White",
          T_opacity: "0",
          B: "White",
          B_opacity: "0",
          R: "White",
          R_opacity: "0",
          L: "White",
          L_opacity: "0",
          F: "White",
          F_opacity: "0",
          G: "White",
          G_opacity: "0",
          H: "White",
          H_opacity: "0",
          I: "White",
          I_opacity: "0",
          J: "Black",
          J_opacity: "0",
          K: "White",
          K_opacity: "0",
          M: "0",
          M_opacity: "0",
          N: "White",
          N_opacity: "0",
          O: "White",
          O_opacity: "0",
          P: "White",
          P_opacity: "0",
          Q: "White",
          Q_opacity: "0",
          R: "White",
          R_opacity: "0",
          S: "White",
          S_opacity: "0",
          TV: "0",
          TV_opacity: "0",
          U: "0",
          U_opacity: "0",
          V: "0",
          V_opacity: "0",
          W: "White",
          W_opacity: "0",
          X: "White",
          X_opacity: "0",
          XA: "White",
          XA_opacity: "0",
          XB: "White",
          XB_opacity: "0",
          XC: "White",
          XC_opacity: "0",
          XD: "White",
          XD_opacity: "0",
          XE: "White",
          XE_opacity: "0",
          XF: "White",
          XF_opacity: "0",
          XG: "White",
          XG_opacity: "0",
          XH: "White",
          XH_opacity: "0",
          XI: "White",
          XI_opacity: "0",
          XJ: "White",
          XJ_opacity: "0",
          XK: "White",
          XK_opacity: "0",
          XL: "White",
          XL_opacity: "0",
          AB: "White",
          AB_opacity: "0",
          BA: "White",
          BA_opacity: "0",
          BB: "White",
          BB_opacity: "0",
          BC: "White",
          BC_opacity: "0",
          BD: "White",
          BD_opacity: "0",
          BE: "White",
          BE_opacity: "0",
          BF: "White",
          BF_opacity: "0",
          OPA: "0",
          OPA_opacity: "0",
          XM: "White",
          XM_opacity: "0",
          XN: "White",
          XN_opacity: "0",
          XO: "White",
          XO_opacity: "0",
          XP: "White",
          XP_opacity: "0",
          XQ: "White",
          XQ_opacity: "0",
          RD: "White",
        },
        transform1: "125",
        transform2: "55",
        title: "53",
        title_2: "",
        title_3: "",
        title_4: "",
        opacity: "0",
      },
      {
        id: "dental52",
        data: {
          C: "White",
          C_opacity: "0",
          T: "White",
          T_opacity: "0",
          B: "White",
          B_opacity: "0",
          R: "White",
          R_opacity: "0",
          L: "White",
          L_opacity: "0",
          F: "White",
          F_opacity: "0",
          G: "White",
          G_opacity: "0",
          H: "White",
          H_opacity: "0",
          I: "White",
          I_opacity: "0",
          J: "Black",
          J_opacity: "0",
          K: "White",
          K_opacity: "0",
          M: "0",
          M_opacity: "0",
          N: "White",
          N_opacity: "0",
          O: "White",
          O_opacity: "0",
          P: "White",
          P_opacity: "0",
          Q: "White",
          Q_opacity: "0",
          R: "White",
          R_opacity: "0",
          S: "White",
          S_opacity: "0",
          TV: "0",
          TV_opacity: "0",
          U: "0",
          U_opacity: "0",
          V: "0",
          V_opacity: "0",
          W: "White",
          W_opacity: "0",
          X: "White",
          X_opacity: "0",
          XA: "White",
          XA_opacity: "0",
          XB: "White",
          XB_opacity: "0",
          XC: "White",
          XC_opacity: "0",
          XD: "White",
          XD_opacity: "0",
          XE: "White",
          XE_opacity: "0",
          XF: "White",
          XF_opacity: "0",
          XG: "White",
          XG_opacity: "0",
          XH: "White",
          XH_opacity: "0",
          XI: "White",
          XI_opacity: "0",
          XJ: "White",
          XJ_opacity: "0",
          XK: "White",
          XK_opacity: "0",
          XL: "White",
          XL_opacity: "0",
          AB: "White",
          AB_opacity: "0",
          BA: "White",
          BA_opacity: "0",
          BB: "White",
          BB_opacity: "0",
          BC: "White",
          BC_opacity: "0",
          BD: "White",
          BD_opacity: "0",
          BE: "White",
          BE_opacity: "0",
          BF: "White",
          BF_opacity: "0",
          OPA: "0",
          OPA_opacity: "0",
          XM: "White",
          XM_opacity: "0",
          XN: "White",
          XN_opacity: "0",
          XO: "White",
          XO_opacity: "0",
          XP: "White",
          XP_opacity: "0",
          XQ: "White",
          XQ_opacity: "0",
          RD: "White",
        },
        transform1: "150",
        transform2: "55",
        title: "52",
        title_2: "",
        title_3: "",
        title_4: "",
        opacity: "0",
      },
      {
        id: "dental51",
        data: {
          C: "White",
          C_opacity: "0",
          T: "White",
          T_opacity: "0",
          B: "White",
          B_opacity: "0",
          R: "White",
          R_opacity: "0",
          L: "White",
          L_opacity: "0",
          F: "White",
          F_opacity: "0",
          G: "White",
          G_opacity: "0",
          H: "White",
          H_opacity: "0",
          I: "White",
          I_opacity: "0",
          J: "Black",
          J_opacity: "0",
          K: "White",
          K_opacity: "0",
          M: "0",
          M_opacity: "0",
          N: "White",
          N_opacity: "0",
          O: "White",
          O_opacity: "0",
          P: "White",
          P_opacity: "0",
          Q: "White",
          Q_opacity: "0",
          R: "White",
          R_opacity: "0",
          S: "White",
          S_opacity: "0",
          TV: "0",
          TV_opacity: "0",
          U: "0",
          U_opacity: "0",
          V: "0",
          V_opacity: "0",
          W: "White",
          W_opacity: "0",
          X: "White",
          X_opacity: "0",
          XA: "White",
          XA_opacity: "0",
          XB: "White",
          XB_opacity: "0",
          XC: "White",
          XC_opacity: "0",
          XD: "White",
          XD_opacity: "0",
          XE: "White",
          XE_opacity: "0",
          XF: "White",
          XF_opacity: "0",
          XG: "White",
          XG_opacity: "0",
          XH: "White",
          XH_opacity: "0",
          XI: "White",
          XI_opacity: "0",
          XJ: "White",
          XJ_opacity: "0",
          XK: "White",
          XK_opacity: "0",
          XL: "White",
          XL_opacity: "0",
          AB: "White",
          AB_opacity: "0",
          BA: "White",
          BA_opacity: "0",
          BB: "White",
          BB_opacity: "0",
          BC: "White",
          BC_opacity: "0",
          BD: "White",
          BD_opacity: "0",
          BE: "White",
          BE_opacity: "0",
          BF: "White",
          BF_opacity: "0",
          OPA: "0",
          OPA_opacity: "0",
          XM: "White",
          XM_opacity: "0",
          XN: "White",
          XN_opacity: "0",
          XO: "White",
          XO_opacity: "0",
          XP: "White",
          XP_opacity: "0",
          XQ: "White",
          XQ_opacity: "0",
          RD: "White",
        },
        transform1: "175",
        transform2: "55",
        title: "51",
        title_2: "",
        title_3: "",
        title_4: "",
        opacity: "0",
      },
      // ],
      // duaKanan : [
      {
        id: "dental61",
        data: {
          C: "White",
          C_opacity: "0",
          T: "White",
          T_opacity: "0",
          B: "White",
          B_opacity: "0",
          R: "White",
          R_opacity: "0",
          L: "White",
          L_opacity: "0",
          F: "White",
          F_opacity: "0",
          G: "White",
          G_opacity: "0",
          H: "White",
          H_opacity: "0",
          I: "White",
          I_opacity: "0",
          J: "Black",
          J_opacity: "0",
          K: "White",
          K_opacity: "0",
          M: "0",
          M_opacity: "0",
          N: "White",
          N_opacity: "0",
          O: "White",
          O_opacity: "0",
          P: "White",
          P_opacity: "0",
          Q: "White",
          Q_opacity: "0",
          R: "White",
          R_opacity: "0",
          S: "White",
          S_opacity: "0",
          TV: "0",
          TV_opacity: "0",
          U: "0",
          U_opacity: "0",
          V: "0",
          V_opacity: "0",
          W: "White",
          W_opacity: "0",
          X: "White",
          X_opacity: "0",
          XA: "White",
          XA_opacity: "0",
          XB: "White",
          XB_opacity: "0",
          XC: "White",
          XC_opacity: "0",
          XD: "White",
          XD_opacity: "0",
          XE: "White",
          XE_opacity: "0",
          XF: "White",
          XF_opacity: "0",
          XG: "White",
          XG_opacity: "0",
          XH: "White",
          XH_opacity: "0",
          XI: "White",
          XI_opacity: "0",
          XJ: "White",
          XJ_opacity: "0",
          XK: "White",
          XK_opacity: "0",
          XL: "White",
          XL_opacity: "0",
          AB: "White",
          AB_opacity: "0",
          BA: "White",
          BA_opacity: "0",
          BB: "White",
          BB_opacity: "0",
          BC: "White",
          BC_opacity: "0",
          BD: "White",
          BD_opacity: "0",
          BE: "White",
          BE_opacity: "0",
          BF: "White",
          BF_opacity: "0",
          OPA: "0",
          OPA_opacity: "0",
          XM: "White",
          XM_opacity: "0",
          XN: "White",
          XN_opacity: "0",
          XO: "White",
          XO_opacity: "0",
          XP: "White",
          XP_opacity: "0",
          XQ: "White",
          XQ_opacity: "0",
          RD: "White",
        },
        transform1: "210",
        transform2: "55",
        title: "61",
        title_2: "",
        title_3: "",
        title_4: "",
        opacity: "0",
      },
      {
        id: "dental62",
        data: {
          C: "White",
          C_opacity: "0",
          T: "White",
          T_opacity: "0",
          B: "White",
          B_opacity: "0",
          R: "White",
          R_opacity: "0",
          L: "White",
          L_opacity: "0",
          F: "White",
          F_opacity: "0",
          G: "White",
          G_opacity: "0",
          H: "White",
          H_opacity: "0",
          I: "White",
          I_opacity: "0",
          J: "Black",
          J_opacity: "0",
          K: "White",
          K_opacity: "0",
          M: "0",
          M_opacity: "0",
          N: "White",
          N_opacity: "0",
          O: "White",
          O_opacity: "0",
          P: "White",
          P_opacity: "0",
          Q: "White",
          Q_opacity: "0",
          R: "White",
          R_opacity: "0",
          S: "White",
          S_opacity: "0",
          TV: "0",
          TV_opacity: "0",
          U: "0",
          U_opacity: "0",
          V: "0",
          V_opacity: "0",
          W: "White",
          W_opacity: "0",
          X: "White",
          X_opacity: "0",
          XA: "White",
          XA_opacity: "0",
          XB: "White",
          XB_opacity: "0",
          XC: "White",
          XC_opacity: "0",
          XD: "White",
          XD_opacity: "0",
          XE: "White",
          XE_opacity: "0",
          XF: "White",
          XF_opacity: "0",
          XG: "White",
          XG_opacity: "0",
          XH: "White",
          XH_opacity: "0",
          XI: "White",
          XI_opacity: "0",
          XJ: "White",
          XJ_opacity: "0",
          XK: "White",
          XK_opacity: "0",
          XL: "White",
          XL_opacity: "0",
          AB: "White",
          AB_opacity: "0",
          BA: "White",
          BA_opacity: "0",
          BB: "White",
          BB_opacity: "0",
          BC: "White",
          BC_opacity: "0",
          BD: "White",
          BD_opacity: "0",
          BE: "White",
          BE_opacity: "0",
          BF: "White",
          BF_opacity: "0",
          OPA: "0",
          OPA_opacity: "0",
          XM: "White",
          XM_opacity: "0",
          XN: "White",
          XN_opacity: "0",
          XO: "White",
          XO_opacity: "0",
          XP: "White",
          XP_opacity: "0",
          XQ: "White",
          XQ_opacity: "0",
          RD: "White",
        },
        transform1: "235",
        transform2: "55",
        title: "62",
        title_2: "",
        title_3: "",
        title_4: "",
        opacity: "0",
      },
      {
        id: "dental63",
        data: {
          C: "White",
          C_opacity: "0",
          T: "White",
          T_opacity: "0",
          B: "White",
          B_opacity: "0",
          R: "White",
          R_opacity: "0",
          L: "White",
          L_opacity: "0",
          F: "White",
          F_opacity: "0",
          G: "White",
          G_opacity: "0",
          H: "White",
          H_opacity: "0",
          I: "White",
          I_opacity: "0",
          J: "Black",
          J_opacity: "0",
          K: "White",
          K_opacity: "0",
          M: "0",
          M_opacity: "0",
          N: "White",
          N_opacity: "0",
          O: "White",
          O_opacity: "0",
          P: "White",
          P_opacity: "0",
          Q: "White",
          Q_opacity: "0",
          R: "White",
          R_opacity: "0",
          S: "White",
          S_opacity: "0",
          TV: "0",
          TV_opacity: "0",
          U: "0",
          U_opacity: "0",
          V: "0",
          V_opacity: "0",
          W: "White",
          W_opacity: "0",
          X: "White",
          X_opacity: "0",
          XA: "White",
          XA_opacity: "0",
          XB: "White",
          XB_opacity: "0",
          XC: "White",
          XC_opacity: "0",
          XD: "White",
          XD_opacity: "0",
          XE: "White",
          XE_opacity: "0",
          XF: "White",
          XF_opacity: "0",
          XG: "White",
          XG_opacity: "0",
          XH: "White",
          XH_opacity: "0",
          XI: "White",
          XI_opacity: "0",
          XJ: "White",
          XJ_opacity: "0",
          XK: "White",
          XK_opacity: "0",
          XL: "White",
          XL_opacity: "0",
          AB: "White",
          AB_opacity: "0",
          BA: "White",
          BA_opacity: "0",
          BB: "White",
          BB_opacity: "0",
          BC: "White",
          BC_opacity: "0",
          BD: "White",
          BD_opacity: "0",
          BE: "White",
          BE_opacity: "0",
          BF: "White",
          BF_opacity: "0",
          OPA: "0",
          OPA_opacity: "0",
          XM: "White",
          XM_opacity: "0",
          XN: "White",
          XN_opacity: "0",
          XO: "White",
          XO_opacity: "0",
          XP: "White",
          XP_opacity: "0",
          XQ: "White",
          XQ_opacity: "0",
          RD: "White",
        },
        transform1: "260",
        transform2: "55",
        title: "63",
        title_2: "",
        title_3: "",
        title_4: "",
        opacity: "0",
      },
      {
        id: "dental64",
        data: {
          C: "White",
          C_opacity: "0",
          T: "White",
          T_opacity: "0",
          B: "White",
          B_opacity: "0",
          R: "White",
          R_opacity: "0",
          L: "White",
          L_opacity: "0",
          F: "White",
          F_opacity: "0",
          G: "White",
          G_opacity: "0",
          H: "White",
          H_opacity: "0",
          I: "White",
          I_opacity: "0",
          J: "Black",
          J_opacity: "0",
          K: "White",
          K_opacity: "0",
          M: "0",
          M_opacity: "0",
          N: "White",
          N_opacity: "0",
          O: "White",
          O_opacity: "0",
          P: "White",
          P_opacity: "0",
          Q: "White",
          Q_opacity: "0",
          R: "White",
          R_opacity: "0",
          S: "White",
          S_opacity: "0",
          TV: "0",
          TV_opacity: "0",
          U: "0",
          U_opacity: "0",
          V: "0",
          V_opacity: "0",
          W: "White",
          W_opacity: "0",
          X: "White",
          X_opacity: "0",
          XA: "White",
          XA_opacity: "0",
          XB: "White",
          XB_opacity: "0",
          XC: "White",
          XC_opacity: "0",
          XD: "White",
          XD_opacity: "0",
          XE: "White",
          XE_opacity: "0",
          XF: "White",
          XF_opacity: "0",
          XG: "White",
          XG_opacity: "0",
          XH: "White",
          XH_opacity: "0",
          XI: "White",
          XI_opacity: "0",
          XJ: "White",
          XJ_opacity: "0",
          XK: "White",
          XK_opacity: "0",
          XL: "White",
          XL_opacity: "0",
          AB: "White",
          AB_opacity: "0",
          BA: "White",
          BA_opacity: "0",
          BB: "White",
          BB_opacity: "0",
          BC: "White",
          BC_opacity: "0",
          BD: "White",
          BD_opacity: "0",
          BE: "White",
          BE_opacity: "0",
          BF: "White",
          BF_opacity: "0",
          OPA: "0",
          OPA_opacity: "0",
          XM: "White",
          XM_opacity: "0",
          XN: "White",
          XN_opacity: "0",
          XO: "White",
          XO_opacity: "0",
          XP: "White",
          XP_opacity: "0",
          XQ: "White",
          XQ_opacity: "0",
          RD: "White",
        },
        transform1: "285",
        transform2: "55",
        title: "64",
        title_2: "",
        title_3: "",
        title_4: "",
        opacity: "0",
      },
      {
        id: "dental65",
        data: {
          C: "White",
          C_opacity: "0",
          T: "White",
          T_opacity: "0",
          B: "White",
          B_opacity: "0",
          R: "White",
          R_opacity: "0",
          L: "White",
          L_opacity: "0",
          F: "White",
          F_opacity: "0",
          G: "White",
          G_opacity: "0",
          H: "White",
          H_opacity: "0",
          I: "White",
          I_opacity: "0",
          J: "Black",
          J_opacity: "0",
          K: "White",
          K_opacity: "0",
          M: "0",
          M_opacity: "0",
          N: "White",
          N_opacity: "0",
          O: "White",
          O_opacity: "0",
          P: "White",
          P_opacity: "0",
          Q: "White",
          Q_opacity: "0",
          R: "White",
          R_opacity: "0",
          S: "White",
          S_opacity: "0",
          TV: "0",
          TV_opacity: "0",
          U: "0",
          U_opacity: "0",
          V: "0",
          V_opacity: "0",
          W: "White",
          W_opacity: "0",
          X: "White",
          X_opacity: "0",
          XA: "White",
          XA_opacity: "0",
          XB: "White",
          XB_opacity: "0",
          XC: "White",
          XC_opacity: "0",
          XD: "White",
          XD_opacity: "0",
          XE: "White",
          XE_opacity: "0",
          XF: "White",
          XF_opacity: "0",
          XG: "White",
          XG_opacity: "0",
          XH: "White",
          XH_opacity: "0",
          XI: "White",
          XI_opacity: "0",
          XJ: "White",
          XJ_opacity: "0",
          XK: "White",
          XK_opacity: "0",
          XL: "White",
          XL_opacity: "0",
          AB: "White",
          AB_opacity: "0",
          BA: "White",
          BA_opacity: "0",
          BB: "White",
          BB_opacity: "0",
          BC: "White",
          BC_opacity: "0",
          BD: "White",
          BD_opacity: "0",
          BE: "White",
          BE_opacity: "0",
          BF: "White",
          BF_opacity: "0",
          OPA: "0",
          OPA_opacity: "0",
          XM: "White",
          XM_opacity: "0",
          XN: "White",
          XN_opacity: "0",
          XO: "White",
          XO_opacity: "0",
          XP: "White",
          XP_opacity: "0",
          XQ: "White",
          XQ_opacity: "0",
          RD: "White",
        },
        transform1: "310",
        transform2: "55",
        title: "65",
        title_2: "",
        title_3: "",
        title_4: "",
        opacity: "0",
      },
      // ],
      // tigaKiri : [
      {
        id: "dental85",
        data: {
          C: "White",
          C_opacity: "0",
          T: "White",
          T_opacity: "0",
          B: "White",
          B_opacity: "0",
          R: "White",
          R_opacity: "0",
          L: "White",
          L_opacity: "0",
          F: "White",
          F_opacity: "0",
          G: "White",
          G_opacity: "0",
          H: "White",
          H_opacity: "0",
          I: "White",
          I_opacity: "0",
          J: "Black",
          J_opacity: "0",
          K: "White",
          K_opacity: "0",
          M: "0",
          M_opacity: "0",
          N: "White",
          N_opacity: "0",
          O: "White",
          O_opacity: "0",
          P: "White",
          P_opacity: "0",
          Q: "White",
          Q_opacity: "0",
          R: "White",
          R_opacity: "0",
          S: "White",
          S_opacity: "0",
          TV: "0",
          TV_opacity: "0",
          U: "0",
          U_opacity: "0",
          V: "0",
          V_opacity: "0",
          W: "White",
          W_opacity: "0",
          X: "White",
          X_opacity: "0",
          XA: "White",
          XA_opacity: "0",
          XB: "White",
          XB_opacity: "0",
          XC: "White",
          XC_opacity: "0",
          XD: "White",
          XD_opacity: "0",
          XE: "White",
          XE_opacity: "0",
          XF: "White",
          XF_opacity: "0",
          XG: "White",
          XG_opacity: "0",
          XH: "White",
          XH_opacity: "0",
          XI: "White",
          XI_opacity: "0",
          XJ: "White",
          XJ_opacity: "0",
          XK: "White",
          XK_opacity: "0",
          XL: "White",
          XL_opacity: "0",
          AB: "White",
          AB_opacity: "0",
          BA: "White",
          BA_opacity: "0",
          BB: "White",
          BB_opacity: "0",
          BC: "White",
          BC_opacity: "0",
          BD: "White",
          BD_opacity: "0",
          BE: "White",
          BE_opacity: "0",
          BF: "White",
          BF_opacity: "0",
          OPA: "0",
          OPA_opacity: "0",
          XM: "White",
          XM_opacity: "0",
          XN: "White",
          XN_opacity: "0",
          XO: "White",
          XO_opacity: "0",
          XP: "White",
          XP_opacity: "0",
          XQ: "White",
          XQ_opacity: "0",
          RD: "White",
        },
        transform1: "75",
        transform2: "110",
        title: "85",
        title_2: "",
        title_3: "",
        title_4: "",
        opacity: "0",
      },
      {
        id: "dental84",
        data: {
          C: "White",
          C_opacity: "0",
          T: "White",
          T_opacity: "0",
          B: "White",
          B_opacity: "0",
          R: "White",
          R_opacity: "0",
          L: "White",
          L_opacity: "0",
          F: "White",
          F_opacity: "0",
          G: "White",
          G_opacity: "0",
          H: "White",
          H_opacity: "0",
          I: "White",
          I_opacity: "0",
          J: "Black",
          J_opacity: "0",
          K: "White",
          K_opacity: "0",
          M: "0",
          M_opacity: "0",
          N: "White",
          N_opacity: "0",
          O: "White",
          O_opacity: "0",
          P: "White",
          P_opacity: "0",
          Q: "White",
          Q_opacity: "0",
          R: "White",
          R_opacity: "0",
          S: "White",
          S_opacity: "0",
          TV: "0",
          TV_opacity: "0",
          U: "0",
          U_opacity: "0",
          V: "0",
          V_opacity: "0",
          W: "White",
          W_opacity: "0",
          X: "White",
          X_opacity: "0",
          XA: "White",
          XA_opacity: "0",
          XB: "White",
          XB_opacity: "0",
          XC: "White",
          XC_opacity: "0",
          XD: "White",
          XD_opacity: "0",
          XE: "White",
          XE_opacity: "0",
          XF: "White",
          XF_opacity: "0",
          XG: "White",
          XG_opacity: "0",
          XH: "White",
          XH_opacity: "0",
          XI: "White",
          XI_opacity: "0",
          XJ: "White",
          XJ_opacity: "0",
          XK: "White",
          XK_opacity: "0",
          XL: "White",
          XL_opacity: "0",
          AB: "White",
          AB_opacity: "0",
          BA: "White",
          BA_opacity: "0",
          BB: "White",
          BB_opacity: "0",
          BC: "White",
          BC_opacity: "0",
          BD: "White",
          BD_opacity: "0",
          BE: "White",
          BE_opacity: "0",
          BF: "White",
          BF_opacity: "0",
          OPA: "0",
          OPA_opacity: "0",
          XM: "White",
          XM_opacity: "0",
          XN: "White",
          XN_opacity: "0",
          XO: "White",
          XO_opacity: "0",
          XP: "White",
          XP_opacity: "0",
          XQ: "White",
          XQ_opacity: "0",
          RD: "White",
        },
        transform1: "100",
        transform2: "110",
        title: "84",
        title_2: "",
        title_3: "",
        title_4: "",
        opacity: "0",
      },
      {
        id: "dental83",
        data: {
          C: "White",
          C_opacity: "0",
          T: "White",
          T_opacity: "0",
          B: "White",
          B_opacity: "0",
          R: "White",
          R_opacity: "0",
          L: "White",
          L_opacity: "0",
          F: "White",
          F_opacity: "0",
          G: "White",
          G_opacity: "0",
          H: "White",
          H_opacity: "0",
          I: "White",
          I_opacity: "0",
          J: "Black",
          J_opacity: "0",
          K: "White",
          K_opacity: "0",
          M: "0",
          M_opacity: "0",
          N: "White",
          N_opacity: "0",
          O: "White",
          O_opacity: "0",
          P: "White",
          P_opacity: "0",
          Q: "White",
          Q_opacity: "0",
          R: "White",
          R_opacity: "0",
          S: "White",
          S_opacity: "0",
          TV: "0",
          TV_opacity: "0",
          U: "0",
          U_opacity: "0",
          V: "0",
          V_opacity: "0",
          W: "White",
          W_opacity: "0",
          X: "White",
          X_opacity: "0",
          XA: "White",
          XA_opacity: "0",
          XB: "White",
          XB_opacity: "0",
          XC: "White",
          XC_opacity: "0",
          XD: "White",
          XD_opacity: "0",
          XE: "White",
          XE_opacity: "0",
          XF: "White",
          XF_opacity: "0",
          XG: "White",
          XG_opacity: "0",
          XH: "White",
          XH_opacity: "0",
          XI: "White",
          XI_opacity: "0",
          XJ: "White",
          XJ_opacity: "0",
          XK: "White",
          XK_opacity: "0",
          XL: "White",
          XL_opacity: "0",
          AB: "White",
          AB_opacity: "0",
          BA: "White",
          BA_opacity: "0",
          BB: "White",
          BB_opacity: "0",
          BC: "White",
          BC_opacity: "0",
          BD: "White",
          BD_opacity: "0",
          BE: "White",
          BE_opacity: "0",
          BF: "White",
          BF_opacity: "0",
          OPA: "0",
          OPA_opacity: "0",
          XM: "White",
          XM_opacity: "0",
          XN: "White",
          XN_opacity: "0",
          XO: "White",
          XO_opacity: "0",
          XP: "White",
          XP_opacity: "0",
          XQ: "White",
          XQ_opacity: "0",
          RD: "White",
        },
        transform1: "125",
        transform2: "110",
        title: "83",
        title_2: "",
        title_3: "",
        title_4: "",
        opacity: "0",
      },
      {
        id: "dental82",
        data: {
          C: "White",
          C_opacity: "0",
          T: "White",
          T_opacity: "0",
          B: "White",
          B_opacity: "0",
          R: "White",
          R_opacity: "0",
          L: "White",
          L_opacity: "0",
          F: "White",
          F_opacity: "0",
          G: "White",
          G_opacity: "0",
          H: "White",
          H_opacity: "0",
          I: "White",
          I_opacity: "0",
          J: "Black",
          J_opacity: "0",
          K: "White",
          K_opacity: "0",
          M: "0",
          M_opacity: "0",
          N: "White",
          N_opacity: "0",
          O: "White",
          O_opacity: "0",
          P: "White",
          P_opacity: "0",
          Q: "White",
          Q_opacity: "0",
          R: "White",
          R_opacity: "0",
          S: "White",
          S_opacity: "0",
          TV: "0",
          TV_opacity: "0",
          U: "0",
          U_opacity: "0",
          V: "0",
          V_opacity: "0",
          W: "White",
          W_opacity: "0",
          X: "White",
          X_opacity: "0",
          XA: "White",
          XA_opacity: "0",
          XB: "White",
          XB_opacity: "0",
          XC: "White",
          XC_opacity: "0",
          XD: "White",
          XD_opacity: "0",
          XE: "White",
          XE_opacity: "0",
          XF: "White",
          XF_opacity: "0",
          XG: "White",
          XG_opacity: "0",
          XH: "White",
          XH_opacity: "0",
          XI: "White",
          XI_opacity: "0",
          XJ: "White",
          XJ_opacity: "0",
          XK: "White",
          XK_opacity: "0",
          XL: "White",
          XL_opacity: "0",
          AB: "White",
          AB_opacity: "0",
          BA: "White",
          BA_opacity: "0",
          BB: "White",
          BB_opacity: "0",
          BC: "White",
          BC_opacity: "0",
          BD: "White",
          BD_opacity: "0",
          BE: "White",
          BE_opacity: "0",
          BF: "White",
          BF_opacity: "0",
          OPA: "0",
          OPA_opacity: "0",
          XM: "White",
          XM_opacity: "0",
          XN: "White",
          XN_opacity: "0",
          XO: "White",
          XO_opacity: "0",
          XP: "White",
          XP_opacity: "0",
          XQ: "White",
          XQ_opacity: "0",
          RD: "White",
        },
        transform1: "150",
        transform2: "110",
        title: "82",
        title_2: "",
        title_3: "",
        title_4: "",
        opacity: "0",
      },
      {
        id: "dental81",
        data: {
          C: "White",
          C_opacity: "0",
          T: "White",
          T_opacity: "0",
          B: "White",
          B_opacity: "0",
          R: "White",
          R_opacity: "0",
          L: "White",
          L_opacity: "0",
          F: "White",
          F_opacity: "0",
          G: "White",
          G_opacity: "0",
          H: "White",
          H_opacity: "0",
          I: "White",
          I_opacity: "0",
          J: "Black",
          J_opacity: "0",
          K: "White",
          K_opacity: "0",
          M: "0",
          M_opacity: "0",
          N: "White",
          N_opacity: "0",
          O: "White",
          O_opacity: "0",
          P: "White",
          P_opacity: "0",
          Q: "White",
          Q_opacity: "0",
          R: "White",
          R_opacity: "0",
          S: "White",
          S_opacity: "0",
          TV: "0",
          TV_opacity: "0",
          U: "0",
          U_opacity: "0",
          V: "0",
          V_opacity: "0",
          W: "White",
          W_opacity: "0",
          X: "White",
          X_opacity: "0",
          XA: "White",
          XA_opacity: "0",
          XB: "White",
          XB_opacity: "0",
          XC: "White",
          XC_opacity: "0",
          XD: "White",
          XD_opacity: "0",
          XE: "White",
          XE_opacity: "0",
          XF: "White",
          XF_opacity: "0",
          XG: "White",
          XG_opacity: "0",
          XH: "White",
          XH_opacity: "0",
          XI: "White",
          XI_opacity: "0",
          XJ: "White",
          XJ_opacity: "0",
          XK: "White",
          XK_opacity: "0",
          XL: "White",
          XL_opacity: "0",
          AB: "White",
          AB_opacity: "0",
          BA: "White",
          BA_opacity: "0",
          BB: "White",
          BB_opacity: "0",
          BC: "White",
          BC_opacity: "0",
          BD: "White",
          BD_opacity: "0",
          BE: "White",
          BE_opacity: "0",
          BF: "White",
          BF_opacity: "0",
          OPA: "0",
          OPA_opacity: "0",
          XM: "White",
          XM_opacity: "0",
          XN: "White",
          XN_opacity: "0",
          XO: "White",
          XO_opacity: "0",
          XP: "White",
          XP_opacity: "0",
          XQ: "White",
          XQ_opacity: "0",
          RD: "White",
        },
        transform1: "175",
        transform2: "110",
        title: "81",
        title_2: "",
        title_3: "",
        title_4: "",
        opacity: "0",
      },
      // ],
      // tigaKanan : [
      {
        id: "dental71",
        data: {
          C: "White",
          C_opacity: "0",
          T: "White",
          T_opacity: "0",
          B: "White",
          B_opacity: "0",
          R: "White",
          R_opacity: "0",
          L: "White",
          L_opacity: "0",
          F: "White",
          F_opacity: "0",
          G: "White",
          G_opacity: "0",
          H: "White",
          H_opacity: "0",
          I: "White",
          I_opacity: "0",
          J: "Black",
          J_opacity: "0",
          K: "White",
          K_opacity: "0",
          M: "0",
          M_opacity: "0",
          N: "White",
          N_opacity: "0",
          O: "White",
          O_opacity: "0",
          P: "White",
          P_opacity: "0",
          Q: "White",
          Q_opacity: "0",
          R: "White",
          R_opacity: "0",
          S: "White",
          S_opacity: "0",
          TV: "0",
          TV_opacity: "0",
          U: "0",
          U_opacity: "0",
          V: "0",
          V_opacity: "0",
          W: "White",
          W_opacity: "0",
          X: "White",
          X_opacity: "0",
          XA: "White",
          XA_opacity: "0",
          XB: "White",
          XB_opacity: "0",
          XC: "White",
          XC_opacity: "0",
          XD: "White",
          XD_opacity: "0",
          XE: "White",
          XE_opacity: "0",
          XF: "White",
          XF_opacity: "0",
          XG: "White",
          XG_opacity: "0",
          XH: "White",
          XH_opacity: "0",
          XI: "White",
          XI_opacity: "0",
          XJ: "White",
          XJ_opacity: "0",
          XK: "White",
          XK_opacity: "0",
          XL: "White",
          XL_opacity: "0",
          AB: "White",
          AB_opacity: "0",
          BA: "White",
          BA_opacity: "0",
          BB: "White",
          BB_opacity: "0",
          BC: "White",
          BC_opacity: "0",
          BD: "White",
          BD_opacity: "0",
          BE: "White",
          BE_opacity: "0",
          BF: "White",
          BF_opacity: "0",
          OPA: "0",
          OPA_opacity: "0",
          XM: "White",
          XM_opacity: "0",
          XN: "White",
          XN_opacity: "0",
          XO: "White",
          XO_opacity: "0",
          XP: "White",
          XP_opacity: "0",
          XQ: "White",
          XQ_opacity: "0",
          RD: "White",
        },
        transform1: "210",
        transform2: "110",
        title: "71",
        title_2: "",
        title_3: "",
        title_4: "",
        opacity: "0",
      },
      {
        id: "dental72",
        data: {
          C: "White",
          C_opacity: "0",
          T: "White",
          T_opacity: "0",
          B: "White",
          B_opacity: "0",
          R: "White",
          R_opacity: "0",
          L: "White",
          L_opacity: "0",
          F: "White",
          F_opacity: "0",
          G: "White",
          G_opacity: "0",
          H: "White",
          H_opacity: "0",
          I: "White",
          I_opacity: "0",
          J: "Black",
          J_opacity: "0",
          K: "White",
          K_opacity: "0",
          M: "0",
          M_opacity: "0",
          N: "White",
          N_opacity: "0",
          O: "White",
          O_opacity: "0",
          P: "White",
          P_opacity: "0",
          Q: "White",
          Q_opacity: "0",
          R: "White",
          R_opacity: "0",
          S: "White",
          S_opacity: "0",
          TV: "0",
          TV_opacity: "0",
          U: "0",
          U_opacity: "0",
          V: "0",
          V_opacity: "0",
          W: "White",
          W_opacity: "0",
          X: "White",
          X_opacity: "0",
          XA: "White",
          XA_opacity: "0",
          XB: "White",
          XB_opacity: "0",
          XC: "White",
          XC_opacity: "0",
          XD: "White",
          XD_opacity: "0",
          XE: "White",
          XE_opacity: "0",
          XF: "White",
          XF_opacity: "0",
          XG: "White",
          XG_opacity: "0",
          XH: "White",
          XH_opacity: "0",
          XI: "White",
          XI_opacity: "0",
          XJ: "White",
          XJ_opacity: "0",
          XK: "White",
          XK_opacity: "0",
          XL: "White",
          XL_opacity: "0",
          AB: "White",
          AB_opacity: "0",
          BA: "White",
          BA_opacity: "0",
          BB: "White",
          BB_opacity: "0",
          BC: "White",
          BC_opacity: "0",
          BD: "White",
          BD_opacity: "0",
          BE: "White",
          BE_opacity: "0",
          BF: "White",
          BF_opacity: "0",
          OPA: "0",
          OPA_opacity: "0",
          XM: "White",
          XM_opacity: "0",
          XN: "White",
          XN_opacity: "0",
          XO: "White",
          XO_opacity: "0",
          XP: "White",
          XP_opacity: "0",
          XQ: "White",
          XQ_opacity: "0",
          RD: "White",
        },
        transform1: "235",
        transform2: "110",
        title: "72",
        title_2: "",
        title_3: "",
        title_4: "",
        opacity: "0",
      },
      {
        id: "dental73",
        data: {
          C: "White",
          C_opacity: "0",
          T: "White",
          T_opacity: "0",
          B: "White",
          B_opacity: "0",
          R: "White",
          R_opacity: "0",
          L: "White",
          L_opacity: "0",
          F: "White",
          F_opacity: "0",
          G: "White",
          G_opacity: "0",
          H: "White",
          H_opacity: "0",
          I: "White",
          I_opacity: "0",
          J: "Black",
          J_opacity: "0",
          K: "White",
          K_opacity: "0",
          M: "0",
          M_opacity: "0",
          N: "White",
          N_opacity: "0",
          O: "White",
          O_opacity: "0",
          P: "White",
          P_opacity: "0",
          Q: "White",
          Q_opacity: "0",
          R: "White",
          R_opacity: "0",
          S: "White",
          S_opacity: "0",
          TV: "0",
          TV_opacity: "0",
          U: "0",
          U_opacity: "0",
          V: "0",
          V_opacity: "0",
          W: "White",
          W_opacity: "0",
          X: "White",
          X_opacity: "0",
          XA: "White",
          XA_opacity: "0",
          XB: "White",
          XB_opacity: "0",
          XC: "White",
          XC_opacity: "0",
          XD: "White",
          XD_opacity: "0",
          XE: "White",
          XE_opacity: "0",
          XF: "White",
          XF_opacity: "0",
          XG: "White",
          XG_opacity: "0",
          XH: "White",
          XH_opacity: "0",
          XI: "White",
          XI_opacity: "0",
          XJ: "White",
          XJ_opacity: "0",
          XK: "White",
          XK_opacity: "0",
          XL: "White",
          XL_opacity: "0",
          AB: "White",
          AB_opacity: "0",
          BA: "White",
          BA_opacity: "0",
          BB: "White",
          BB_opacity: "0",
          BC: "White",
          BC_opacity: "0",
          BD: "White",
          BD_opacity: "0",
          BE: "White",
          BE_opacity: "0",
          BF: "White",
          BF_opacity: "0",
          OPA: "0",
          OPA_opacity: "0",
          XM: "White",
          XM_opacity: "0",
          XN: "White",
          XN_opacity: "0",
          XO: "White",
          XO_opacity: "0",
          XP: "White",
          XP_opacity: "0",
          XQ: "White",
          XQ_opacity: "0",
          RD: "White",
        },
        transform1: "260",
        transform2: "110",
        title: "73",
        title_2: "",
        title_3: "",
        title_4: "",
        opacity: "0",
      },
      {
        id: "dental74",
        data: {
          C: "White",
          C_opacity: "0",
          T: "White",
          T_opacity: "0",
          B: "White",
          B_opacity: "0",
          R: "White",
          R_opacity: "0",
          L: "White",
          L_opacity: "0",
          F: "White",
          F_opacity: "0",
          G: "White",
          G_opacity: "0",
          H: "White",
          H_opacity: "0",
          I: "White",
          I_opacity: "0",
          J: "Black",
          J_opacity: "0",
          K: "White",
          K_opacity: "0",
          M: "0",
          M_opacity: "0",
          N: "White",
          N_opacity: "0",
          O: "White",
          O_opacity: "0",
          P: "White",
          P_opacity: "0",
          Q: "White",
          Q_opacity: "0",
          R: "White",
          R_opacity: "0",
          S: "White",
          S_opacity: "0",
          TV: "0",
          TV_opacity: "0",
          U: "0",
          U_opacity: "0",
          V: "0",
          V_opacity: "0",
          W: "White",
          W_opacity: "0",
          X: "White",
          X_opacity: "0",
          XA: "White",
          XA_opacity: "0",
          XB: "White",
          XB_opacity: "0",
          XC: "White",
          XC_opacity: "0",
          XD: "White",
          XD_opacity: "0",
          XE: "White",
          XE_opacity: "0",
          XF: "White",
          XF_opacity: "0",
          XG: "White",
          XG_opacity: "0",
          XH: "White",
          XH_opacity: "0",
          XI: "White",
          XI_opacity: "0",
          XJ: "White",
          XJ_opacity: "0",
          XK: "White",
          XK_opacity: "0",
          XL: "White",
          XL_opacity: "0",
          AB: "White",
          AB_opacity: "0",
          BA: "White",
          BA_opacity: "0",
          BB: "White",
          BB_opacity: "0",
          BC: "White",
          BC_opacity: "0",
          BD: "White",
          BD_opacity: "0",
          BE: "White",
          BE_opacity: "0",
          BF: "White",
          BF_opacity: "0",
          OPA: "0",
          OPA_opacity: "0",
          XM: "White",
          XM_opacity: "0",
          XN: "White",
          XN_opacity: "0",
          XO: "White",
          XO_opacity: "0",
          XP: "White",
          XP_opacity: "0",
          XQ: "White",
          XQ_opacity: "0",
          RD: "White",
        },
        transform1: "285",
        transform2: "110",
        title: "74",
        title_2: "",
        title_3: "",
        title_4: "",
        opacity: "0",
      },
      {
        id: "dental75",
        data: {
          C: "White",
          C_opacity: "0",
          T: "White",
          T_opacity: "0",
          B: "White",
          B_opacity: "0",
          R: "White",
          R_opacity: "0",
          L: "White",
          L_opacity: "0",
          F: "White",
          F_opacity: "0",
          G: "White",
          G_opacity: "0",
          H: "White",
          H_opacity: "0",
          I: "White",
          I_opacity: "0",
          J: "Black",
          J_opacity: "0",
          K: "White",
          K_opacity: "0",
          M: "0",
          M_opacity: "0",
          N: "White",
          N_opacity: "0",
          O: "White",
          O_opacity: "0",
          P: "White",
          P_opacity: "0",
          Q: "White",
          Q_opacity: "0",
          R: "White",
          R_opacity: "0",
          S: "White",
          S_opacity: "0",
          TV: "0",
          TV_opacity: "0",
          U: "0",
          U_opacity: "0",
          V: "0",
          V_opacity: "0",
          W: "White",
          W_opacity: "0",
          X: "White",
          X_opacity: "0",
          XA: "White",
          XA_opacity: "0",
          XB: "White",
          XB_opacity: "0",
          XC: "White",
          XC_opacity: "0",
          XD: "White",
          XD_opacity: "0",
          XE: "White",
          XE_opacity: "0",
          XF: "White",
          XF_opacity: "0",
          XG: "White",
          XG_opacity: "0",
          XH: "White",
          XH_opacity: "0",
          XI: "White",
          XI_opacity: "0",
          XJ: "White",
          XJ_opacity: "0",
          XK: "White",
          XK_opacity: "0",
          XL: "White",
          XL_opacity: "0",
          AB: "White",
          AB_opacity: "0",
          BA: "White",
          BA_opacity: "0",
          BB: "White",
          BB_opacity: "0",
          BC: "White",
          BC_opacity: "0",
          BD: "White",
          BD_opacity: "0",
          BE: "White",
          BE_opacity: "0",
          BF: "White",
          BF_opacity: "0",
          OPA: "0",
          OPA_opacity: "0",
          XM: "White",
          XM_opacity: "0",
          XN: "White",
          XN_opacity: "0",
          XO: "White",
          XO_opacity: "0",
          XP: "White",
          XP_opacity: "0",
          XQ: "White",
          XQ_opacity: "0",
          RD: "White",
        },
        transform1: "310",
        transform2: "110",
        title: "75",
        title_2: "",
        title_3: "",
        title_4: "",
        opacity: "0",
      },
      // ],
      // empatKiri : [
      {
        id: "dental48",
        data: {
          C: "White",
          C_opacity: "0",
          T: "White",
          T_opacity: "0",
          B: "White",
          B_opacity: "0",
          R: "White",
          R_opacity: "0",
          L: "White",
          L_opacity: "0",
          F: "White",
          F_opacity: "0",
          G: "White",
          G_opacity: "0",
          H: "White",
          H_opacity: "0",
          I: "White",
          I_opacity: "0",
          J: "Black",
          J_opacity: "0",
          K: "White",
          K_opacity: "0",
          M: "0",
          M_opacity: "0",
          N: "White",
          N_opacity: "0",
          O: "White",
          O_opacity: "0",
          P: "White",
          P_opacity: "0",
          Q: "White",
          Q_opacity: "0",
          R: "White",
          R_opacity: "0",
          S: "White",
          S_opacity: "0",
          TV: "0",
          TV_opacity: "0",
          U: "0",
          U_opacity: "0",
          V: "0",
          V_opacity: "0",
          W: "White",
          W_opacity: "0",
          X: "White",
          X_opacity: "0",
          XA: "White",
          XA_opacity: "0",
          XB: "White",
          XB_opacity: "0",
          XC: "White",
          XC_opacity: "0",
          XD: "White",
          XD_opacity: "0",
          XE: "White",
          XE_opacity: "0",
          XF: "White",
          XF_opacity: "0",
          XG: "White",
          XG_opacity: "0",
          XH: "White",
          XH_opacity: "0",
          XI: "White",
          XI_opacity: "0",
          XJ: "White",
          XJ_opacity: "0",
          XK: "White",
          XK_opacity: "0",
          XL: "White",
          XL_opacity: "0",
          AB: "White",
          AB_opacity: "0",
          BA: "White",
          BA_opacity: "0",
          BB: "White",
          BB_opacity: "0",
          BC: "White",
          BC_opacity: "0",
          BD: "White",
          BD_opacity: "0",
          BE: "White",
          BE_opacity: "0",
          BF: "White",
          BF_opacity: "0",
          OPA: "0",
          OPA_opacity: "0",
          XM: "White",
          XM_opacity: "0",
          XN: "White",
          XN_opacity: "0",
          XO: "White",
          XO_opacity: "0",
          XP: "White",
          XP_opacity: "0",
          XQ: "White",
          XQ_opacity: "0",
          RD: "White",
        },
        transform1: "0",
        transform2: "165",
        title: "48",
        title_2: "",
        title_3: "",
        title_4: "",
        opacity: "0",
      },
      {
        id: "dental47",
        data: {
          C: "White",
          C_opacity: "0",
          T: "White",
          T_opacity: "0",
          B: "White",
          B_opacity: "0",
          R: "White",
          R_opacity: "0",
          L: "White",
          L_opacity: "0",
          F: "White",
          F_opacity: "0",
          G: "White",
          G_opacity: "0",
          H: "White",
          H_opacity: "0",
          I: "White",
          I_opacity: "0",
          J: "Black",
          J_opacity: "0",
          K: "White",
          K_opacity: "0",
          M: "0",
          M_opacity: "0",
          N: "White",
          N_opacity: "0",
          O: "White",
          O_opacity: "0",
          P: "White",
          P_opacity: "0",
          Q: "White",
          Q_opacity: "0",
          R: "White",
          R_opacity: "0",
          S: "White",
          S_opacity: "0",
          TV: "0",
          TV_opacity: "0",
          U: "0",
          U_opacity: "0",
          V: "0",
          V_opacity: "0",
          W: "White",
          W_opacity: "0",
          X: "White",
          X_opacity: "0",
          XA: "White",
          XA_opacity: "0",
          XB: "White",
          XB_opacity: "0",
          XC: "White",
          XC_opacity: "0",
          XD: "White",
          XD_opacity: "0",
          XE: "White",
          XE_opacity: "0",
          XF: "White",
          XF_opacity: "0",
          XG: "White",
          XG_opacity: "0",
          XH: "White",
          XH_opacity: "0",
          XI: "White",
          XI_opacity: "0",
          XJ: "White",
          XJ_opacity: "0",
          XK: "White",
          XK_opacity: "0",
          XL: "White",
          XL_opacity: "0",
          AB: "White",
          AB_opacity: "0",
          BA: "White",
          BA_opacity: "0",
          BB: "White",
          BB_opacity: "0",
          BC: "White",
          BC_opacity: "0",
          BD: "White",
          BD_opacity: "0",
          BE: "White",
          BE_opacity: "0",
          BF: "White",
          BF_opacity: "0",
          OPA: "0",
          OPA_opacity: "0",
          XM: "White",
          XM_opacity: "0",
          XN: "White",
          XN_opacity: "0",
          XO: "White",
          XO_opacity: "0",
          XP: "White",
          XP_opacity: "0",
          XQ: "White",
          XQ_opacity: "0",
          RD: "White",
        },
        transform1: "25",
        transform2: "165",
        title: "47",
        title_2: "",
        title_3: "",
        title_4: "",
        opacity: "0",
      },
      {
        id: "dental46",
        data: {
          C: "White",
          C_opacity: "0",
          T: "White",
          T_opacity: "0",
          B: "White",
          B_opacity: "0",
          R: "White",
          R_opacity: "0",
          L: "White",
          L_opacity: "0",
          F: "White",
          F_opacity: "0",
          G: "White",
          G_opacity: "0",
          H: "White",
          H_opacity: "0",
          I: "White",
          I_opacity: "0",
          J: "Black",
          J_opacity: "0",
          K: "White",
          K_opacity: "0",
          M: "0",
          M_opacity: "0",
          N: "White",
          N_opacity: "0",
          O: "White",
          O_opacity: "0",
          P: "White",
          P_opacity: "0",
          Q: "White",
          Q_opacity: "0",
          R: "White",
          R_opacity: "0",
          S: "White",
          S_opacity: "0",
          TV: "0",
          TV_opacity: "0",
          U: "0",
          U_opacity: "0",
          V: "0",
          V_opacity: "0",
          W: "White",
          W_opacity: "0",
          X: "White",
          X_opacity: "0",
          XA: "White",
          XA_opacity: "0",
          XB: "White",
          XB_opacity: "0",
          XC: "White",
          XC_opacity: "0",
          XD: "White",
          XD_opacity: "0",
          XE: "White",
          XE_opacity: "0",
          XF: "White",
          XF_opacity: "0",
          XG: "White",
          XG_opacity: "0",
          XH: "White",
          XH_opacity: "0",
          XI: "White",
          XI_opacity: "0",
          XJ: "White",
          XJ_opacity: "0",
          XK: "White",
          XK_opacity: "0",
          XL: "White",
          XL_opacity: "0",
          AB: "White",
          AB_opacity: "0",
          BA: "White",
          BA_opacity: "0",
          BB: "White",
          BB_opacity: "0",
          BC: "White",
          BC_opacity: "0",
          BD: "White",
          BD_opacity: "0",
          BE: "White",
          BE_opacity: "0",
          BF: "White",
          BF_opacity: "0",
          OPA: "0",
          OPA_opacity: "0",
          XM: "White",
          XM_opacity: "0",
          XN: "White",
          XN_opacity: "0",
          XO: "White",
          XO_opacity: "0",
          XP: "White",
          XP_opacity: "0",
          XQ: "White",
          XQ_opacity: "0",
          RD: "White",
        },
        transform1: "50",
        transform2: "165",
        title: "46",
        title_2: "",
        title_3: "",
        title_4: "",
        opacity: "0",
      },
      {
        id: "dental45",
        data: {
          C: "White",
          C_opacity: "0",
          T: "White",
          T_opacity: "0",
          B: "White",
          B_opacity: "0",
          R: "White",
          R_opacity: "0",
          L: "White",
          L_opacity: "0",
          F: "White",
          F_opacity: "0",
          G: "White",
          G_opacity: "0",
          H: "White",
          H_opacity: "0",
          I: "White",
          I_opacity: "0",
          J: "Black",
          J_opacity: "0",
          K: "White",
          K_opacity: "0",
          M: "0",
          M_opacity: "0",
          N: "White",
          N_opacity: "0",
          O: "White",
          O_opacity: "0",
          P: "White",
          P_opacity: "0",
          Q: "White",
          Q_opacity: "0",
          R: "White",
          R_opacity: "0",
          S: "White",
          S_opacity: "0",
          TV: "0",
          TV_opacity: "0",
          U: "0",
          U_opacity: "0",
          V: "0",
          V_opacity: "0",
          W: "White",
          W_opacity: "0",
          X: "White",
          X_opacity: "0",
          XA: "White",
          XA_opacity: "0",
          XB: "White",
          XB_opacity: "0",
          XC: "White",
          XC_opacity: "0",
          XD: "White",
          XD_opacity: "0",
          XE: "White",
          XE_opacity: "0",
          XF: "White",
          XF_opacity: "0",
          XG: "White",
          XG_opacity: "0",
          XH: "White",
          XH_opacity: "0",
          XI: "White",
          XI_opacity: "0",
          XJ: "White",
          XJ_opacity: "0",
          XK: "White",
          XK_opacity: "0",
          XL: "White",
          XL_opacity: "0",
          AB: "White",
          AB_opacity: "0",
          BA: "White",
          BA_opacity: "0",
          BB: "White",
          BB_opacity: "0",
          BC: "White",
          BC_opacity: "0",
          BD: "White",
          BD_opacity: "0",
          BE: "White",
          BE_opacity: "0",
          BF: "White",
          BF_opacity: "0",
          OPA: "0",
          OPA_opacity: "0",
          XM: "White",
          XM_opacity: "0",
          XN: "White",
          XN_opacity: "0",
          XO: "White",
          XO_opacity: "0",
          XP: "White",
          XP_opacity: "0",
          XQ: "White",
          XQ_opacity: "0",
          RD: "White",
        },
        transform1: "75",
        transform2: "165",
        title: "45",
        title_2: "",
        title_3: "",
        title_4: "",
        opacity: "0",
      },
      {
        id: "dental44",
        data: {
          C: "White",
          C_opacity: "0",
          T: "White",
          T_opacity: "0",
          B: "White",
          B_opacity: "0",
          R: "White",
          R_opacity: "0",
          L: "White",
          L_opacity: "0",
          F: "White",
          F_opacity: "0",
          G: "White",
          G_opacity: "0",
          H: "White",
          H_opacity: "0",
          I: "White",
          I_opacity: "0",
          J: "Black",
          J_opacity: "0",
          K: "White",
          K_opacity: "0",
          M: "0",
          M_opacity: "0",
          N: "White",
          N_opacity: "0",
          O: "White",
          O_opacity: "0",
          P: "White",
          P_opacity: "0",
          Q: "White",
          Q_opacity: "0",
          R: "White",
          R_opacity: "0",
          S: "White",
          S_opacity: "0",
          TV: "0",
          TV_opacity: "0",
          U: "0",
          U_opacity: "0",
          V: "0",
          V_opacity: "0",
          W: "White",
          W_opacity: "0",
          X: "White",
          X_opacity: "0",
          XA: "White",
          XA_opacity: "0",
          XB: "White",
          XB_opacity: "0",
          XC: "White",
          XC_opacity: "0",
          XD: "White",
          XD_opacity: "0",
          XE: "White",
          XE_opacity: "0",
          XF: "White",
          XF_opacity: "0",
          XG: "White",
          XG_opacity: "0",
          XH: "White",
          XH_opacity: "0",
          XI: "White",
          XI_opacity: "0",
          XJ: "White",
          XJ_opacity: "0",
          XK: "White",
          XK_opacity: "0",
          XL: "White",
          XL_opacity: "0",
          AB: "White",
          AB_opacity: "0",
          BA: "White",
          BA_opacity: "0",
          BB: "White",
          BB_opacity: "0",
          BC: "White",
          BC_opacity: "0",
          BD: "White",
          BD_opacity: "0",
          BE: "White",
          BE_opacity: "0",
          BF: "White",
          BF_opacity: "0",
          OPA: "0",
          OPA_opacity: "0",
          XM: "White",
          XM_opacity: "0",
          XN: "White",
          XN_opacity: "0",
          XO: "White",
          XO_opacity: "0",
          XP: "White",
          XP_opacity: "0",
          XQ: "White",
          XQ_opacity: "0",
          RD: "White",
        },
        transform1: "100",
        transform2: "165",
        title: "44",
        title_2: "",
        title_3: "",
        title_4: "",
        opacity: "0",
      },
      {
        id: "dental43",
        data: {
          C: "White",
          C_opacity: "0",
          T: "White",
          T_opacity: "0",
          B: "White",
          B_opacity: "0",
          R: "White",
          R_opacity: "0",
          L: "White",
          L_opacity: "0",
          F: "White",
          F_opacity: "0",
          G: "White",
          G_opacity: "0",
          H: "White",
          H_opacity: "0",
          I: "White",
          I_opacity: "0",
          J: "Black",
          J_opacity: "0",
          K: "White",
          K_opacity: "0",
          M: "0",
          M_opacity: "0",
          N: "White",
          N_opacity: "0",
          O: "White",
          O_opacity: "0",
          P: "White",
          P_opacity: "0",
          Q: "White",
          Q_opacity: "0",
          R: "White",
          R_opacity: "0",
          S: "White",
          S_opacity: "0",
          TV: "0",
          TV_opacity: "0",
          U: "0",
          U_opacity: "0",
          V: "0",
          V_opacity: "0",
          W: "White",
          W_opacity: "0",
          X: "White",
          X_opacity: "0",
          XA: "White",
          XA_opacity: "0",
          XB: "White",
          XB_opacity: "0",
          XC: "White",
          XC_opacity: "0",
          XD: "White",
          XD_opacity: "0",
          XE: "White",
          XE_opacity: "0",
          XF: "White",
          XF_opacity: "0",
          XG: "White",
          XG_opacity: "0",
          XH: "White",
          XH_opacity: "0",
          XI: "White",
          XI_opacity: "0",
          XJ: "White",
          XJ_opacity: "0",
          XK: "White",
          XK_opacity: "0",
          XL: "White",
          XL_opacity: "0",
          AB: "White",
          AB_opacity: "0",
          BA: "White",
          BA_opacity: "0",
          BB: "White",
          BB_opacity: "0",
          BC: "White",
          BC_opacity: "0",
          BD: "White",
          BD_opacity: "0",
          BE: "White",
          BE_opacity: "0",
          BF: "White",
          BF_opacity: "0",
          OPA: "0",
          OPA_opacity: "0",
          XM: "White",
          XM_opacity: "0",
          XN: "White",
          XN_opacity: "0",
          XO: "White",
          XO_opacity: "0",
          XP: "White",
          XP_opacity: "0",
          XQ: "White",
          XQ_opacity: "0",
          RD: "White",
        },
        transform1: "125",
        transform2: "165",
        title: "43",
        title_2: "",
        title_3: "",
        title_4: "",
        opacity: "0",
      },
      {
        id: "dental42",
        data: {
          C: "White",
          C_opacity: "0",
          T: "White",
          T_opacity: "0",
          B: "White",
          B_opacity: "0",
          R: "White",
          R_opacity: "0",
          L: "White",
          L_opacity: "0",
          F: "White",
          F_opacity: "0",
          G: "White",
          G_opacity: "0",
          H: "White",
          H_opacity: "0",
          I: "White",
          I_opacity: "0",
          J: "Black",
          J_opacity: "0",
          K: "White",
          K_opacity: "0",
          M: "0",
          M_opacity: "0",
          N: "White",
          N_opacity: "0",
          O: "White",
          O_opacity: "0",
          P: "White",
          P_opacity: "0",
          Q: "White",
          Q_opacity: "0",
          R: "White",
          R_opacity: "0",
          S: "White",
          S_opacity: "0",
          TV: "0",
          TV_opacity: "0",
          U: "0",
          U_opacity: "0",
          V: "0",
          V_opacity: "0",
          W: "White",
          W_opacity: "0",
          X: "White",
          X_opacity: "0",
          XA: "White",
          XA_opacity: "0",
          XB: "White",
          XB_opacity: "0",
          XC: "White",
          XC_opacity: "0",
          XD: "White",
          XD_opacity: "0",
          XE: "White",
          XE_opacity: "0",
          XF: "White",
          XF_opacity: "0",
          XG: "White",
          XG_opacity: "0",
          XH: "White",
          XH_opacity: "0",
          XI: "White",
          XI_opacity: "0",
          XJ: "White",
          XJ_opacity: "0",
          XK: "White",
          XK_opacity: "0",
          XL: "White",
          XL_opacity: "0",
          AB: "White",
          AB_opacity: "0",
          BA: "White",
          BA_opacity: "0",
          BB: "White",
          BB_opacity: "0",
          BC: "White",
          BC_opacity: "0",
          BD: "White",
          BD_opacity: "0",
          BE: "White",
          BE_opacity: "0",
          BF: "White",
          BF_opacity: "0",
          OPA: "0",
          OPA_opacity: "0",
          XM: "White",
          XM_opacity: "0",
          XN: "White",
          XN_opacity: "0",
          XO: "White",
          XO_opacity: "0",
          XP: "White",
          XP_opacity: "0",
          XQ: "White",
          XQ_opacity: "0",
          RD: "White",
        },
        transform1: "150",
        transform2: "165",
        title: "42",
        title_2: "",
        title_3: "",
        title_4: "",
        opacity: "0",
      },
      {
        id: "dental41",
        data: {
          C: "White",
          C_opacity: "0",
          T: "White",
          T_opacity: "0",
          B: "White",
          B_opacity: "0",
          R: "White",
          R_opacity: "0",
          L: "White",
          L_opacity: "0",
          F: "White",
          F_opacity: "0",
          G: "White",
          G_opacity: "0",
          H: "White",
          H_opacity: "0",
          I: "White",
          I_opacity: "0",
          J: "Black",
          J_opacity: "0",
          K: "White",
          K_opacity: "0",
          M: "0",
          M_opacity: "0",
          N: "White",
          N_opacity: "0",
          O: "White",
          O_opacity: "0",
          P: "White",
          P_opacity: "0",
          Q: "White",
          Q_opacity: "0",
          R: "White",
          R_opacity: "0",
          S: "White",
          S_opacity: "0",
          TV: "0",
          TV_opacity: "0",
          U: "0",
          U_opacity: "0",
          V: "0",
          V_opacity: "0",
          W: "White",
          W_opacity: "0",
          X: "White",
          X_opacity: "0",
          XA: "White",
          XA_opacity: "0",
          XB: "White",
          XB_opacity: "0",
          XC: "White",
          XC_opacity: "0",
          XD: "White",
          XD_opacity: "0",
          XE: "White",
          XE_opacity: "0",
          XF: "White",
          XF_opacity: "0",
          XG: "White",
          XG_opacity: "0",
          XH: "White",
          XH_opacity: "0",
          XI: "White",
          XI_opacity: "0",
          XJ: "White",
          XJ_opacity: "0",
          XK: "White",
          XK_opacity: "0",
          XL: "White",
          XL_opacity: "0",
          AB: "White",
          AB_opacity: "0",
          BA: "White",
          BA_opacity: "0",
          BB: "White",
          BB_opacity: "0",
          BC: "White",
          BC_opacity: "0",
          BD: "White",
          BD_opacity: "0",
          BE: "White",
          BE_opacity: "0",
          BF: "White",
          BF_opacity: "0",
          OPA: "0",
          OPA_opacity: "0",
          XM: "White",
          XM_opacity: "0",
          XN: "White",
          XN_opacity: "0",
          XO: "White",
          XO_opacity: "0",
          XP: "White",
          XP_opacity: "0",
          XQ: "White",
          XQ_opacity: "0",
          RD: "White",
        },
        transform1: "175",
        transform2: "165",
        title: "41",
        title_2: "",
        title_3: "",
        title_4: "",
        opacity: "0",
      },
      // ],
      // empatKanan : [
      {
        id: "dental31",
        data: {
          C: "White",
          C_opacity: "0",
          T: "White",
          T_opacity: "0",
          B: "White",
          B_opacity: "0",
          R: "White",
          R_opacity: "0",
          L: "White",
          L_opacity: "0",
          F: "White",
          F_opacity: "0",
          G: "White",
          G_opacity: "0",
          H: "White",
          H_opacity: "0",
          I: "White",
          I_opacity: "0",
          J: "Black",
          J_opacity: "0",
          K: "White",
          K_opacity: "0",
          M: "0",
          M_opacity: "0",
          N: "White",
          N_opacity: "0",
          O: "White",
          O_opacity: "0",
          P: "White",
          P_opacity: "0",
          Q: "White",
          Q_opacity: "0",
          R: "White",
          R_opacity: "0",
          S: "White",
          S_opacity: "0",
          TV: "0",
          TV_opacity: "0",
          U: "0",
          U_opacity: "0",
          V: "0",
          V_opacity: "0",
          W: "White",
          W_opacity: "0",
          X: "White",
          X_opacity: "0",
          XA: "White",
          XA_opacity: "0",
          XB: "White",
          XB_opacity: "0",
          XC: "White",
          XC_opacity: "0",
          XD: "White",
          XD_opacity: "0",
          XE: "White",
          XE_opacity: "0",
          XF: "White",
          XF_opacity: "0",
          XG: "White",
          XG_opacity: "0",
          XH: "White",
          XH_opacity: "0",
          XI: "White",
          XI_opacity: "0",
          XJ: "White",
          XJ_opacity: "0",
          XK: "White",
          XK_opacity: "0",
          XL: "White",
          XL_opacity: "0",
          AB: "White",
          AB_opacity: "0",
          BA: "White",
          BA_opacity: "0",
          BB: "White",
          BB_opacity: "0",
          BC: "White",
          BC_opacity: "0",
          BD: "White",
          BD_opacity: "0",
          BE: "White",
          BE_opacity: "0",
          BF: "White",
          BF_opacity: "0",
          OPA: "0",
          OPA_opacity: "0",
          XM: "White",
          XM_opacity: "0",
          XN: "White",
          XN_opacity: "0",
          XO: "White",
          XO_opacity: "0",
          XP: "White",
          XP_opacity: "0",
          XQ: "White",
          XQ_opacity: "0",
          RD: "White",
        },
        transform1: "210",
        transform2: "165",
        title: "31",
        title_2: "",
        title_3: "",
        title_4: "",
        opacity: "0",
      },
      {
        id: "dental32",
        data: {
          C: "White",
          C_opacity: "0",
          T: "White",
          T_opacity: "0",
          B: "White",
          B_opacity: "0",
          R: "White",
          R_opacity: "0",
          L: "White",
          L_opacity: "0",
          F: "White",
          F_opacity: "0",
          G: "White",
          G_opacity: "0",
          H: "White",
          H_opacity: "0",
          I: "White",
          I_opacity: "0",
          J: "Black",
          J_opacity: "0",
          K: "White",
          K_opacity: "0",
          M: "0",
          M_opacity: "0",
          N: "White",
          N_opacity: "0",
          O: "White",
          O_opacity: "0",
          P: "White",
          P_opacity: "0",
          Q: "White",
          Q_opacity: "0",
          R: "White",
          R_opacity: "0",
          S: "White",
          S_opacity: "0",
          TV: "0",
          TV_opacity: "0",
          U: "0",
          U_opacity: "0",
          V: "0",
          V_opacity: "0",
          W: "White",
          W_opacity: "0",
          X: "White",
          X_opacity: "0",
          XA: "White",
          XA_opacity: "0",
          XB: "White",
          XB_opacity: "0",
          XC: "White",
          XC_opacity: "0",
          XD: "White",
          XD_opacity: "0",
          XE: "White",
          XE_opacity: "0",
          XF: "White",
          XF_opacity: "0",
          XG: "White",
          XG_opacity: "0",
          XH: "White",
          XH_opacity: "0",
          XI: "White",
          XI_opacity: "0",
          XJ: "White",
          XJ_opacity: "0",
          XK: "White",
          XK_opacity: "0",
          XL: "White",
          XL_opacity: "0",
          AB: "White",
          AB_opacity: "0",
          BA: "White",
          BA_opacity: "0",
          BB: "White",
          BB_opacity: "0",
          BC: "White",
          BC_opacity: "0",
          BD: "White",
          BD_opacity: "0",
          BE: "White",
          BE_opacity: "0",
          BF: "White",
          BF_opacity: "0",
          OPA: "0",
          OPA_opacity: "0",
          XM: "White",
          XM_opacity: "0",
          XN: "White",
          XN_opacity: "0",
          XO: "White",
          XO_opacity: "0",
          XP: "White",
          XP_opacity: "0",
          XQ: "White",
          XQ_opacity: "0",
          RD: "White",
        },
        transform1: "235",
        transform2: "165",
        title: "32",
        title_2: "",
        title_3: "",
        title_4: "",
        opacity: "0",
      },
      {
        id: "dental33",
        data: {
          C: "White",
          C_opacity: "0",
          T: "White",
          T_opacity: "0",
          B: "White",
          B_opacity: "0",
          R: "White",
          R_opacity: "0",
          L: "White",
          L_opacity: "0",
          F: "White",
          F_opacity: "0",
          G: "White",
          G_opacity: "0",
          H: "White",
          H_opacity: "0",
          I: "White",
          I_opacity: "0",
          J: "Black",
          J_opacity: "0",
          K: "White",
          K_opacity: "0",
          M: "0",
          M_opacity: "0",
          N: "White",
          N_opacity: "0",
          O: "White",
          O_opacity: "0",
          P: "White",
          P_opacity: "0",
          Q: "White",
          Q_opacity: "0",
          R: "White",
          R_opacity: "0",
          S: "White",
          S_opacity: "0",
          TV: "0",
          TV_opacity: "0",
          U: "0",
          U_opacity: "0",
          V: "0",
          V_opacity: "0",
          W: "White",
          W_opacity: "0",
          X: "White",
          X_opacity: "0",
          XA: "White",
          XA_opacity: "0",
          XB: "White",
          XB_opacity: "0",
          XC: "White",
          XC_opacity: "0",
          XD: "White",
          XD_opacity: "0",
          XE: "White",
          XE_opacity: "0",
          XF: "White",
          XF_opacity: "0",
          XG: "White",
          XG_opacity: "0",
          XH: "White",
          XH_opacity: "0",
          XI: "White",
          XI_opacity: "0",
          XJ: "White",
          XJ_opacity: "0",
          XK: "White",
          XK_opacity: "0",
          XL: "White",
          XL_opacity: "0",
          AB: "White",
          AB_opacity: "0",
          BA: "White",
          BA_opacity: "0",
          BB: "White",
          BB_opacity: "0",
          BC: "White",
          BC_opacity: "0",
          BD: "White",
          BD_opacity: "0",
          BE: "White",
          BE_opacity: "0",
          BF: "White",
          BF_opacity: "0",
          OPA: "0",
          OPA_opacity: "0",
          XM: "White",
          XM_opacity: "0",
          XN: "White",
          XN_opacity: "0",
          XO: "White",
          XO_opacity: "0",
          XP: "White",
          XP_opacity: "0",
          XQ: "White",
          XQ_opacity: "0",
          RD: "White",
        },
        transform1: "260",
        transform2: "165",
        title: "33",
        title_2: "",
        title_3: "",
        title_4: "",
        opacity: "0",
      },
      {
        id: "dental34",
        data: {
          C: "White",
          C_opacity: "0",
          T: "White",
          T_opacity: "0",
          B: "White",
          B_opacity: "0",
          R: "White",
          R_opacity: "0",
          L: "White",
          L_opacity: "0",
          F: "White",
          F_opacity: "0",
          G: "White",
          G_opacity: "0",
          H: "White",
          H_opacity: "0",
          I: "White",
          I_opacity: "0",
          J: "Black",
          J_opacity: "0",
          K: "White",
          K_opacity: "0",
          M: "0",
          M_opacity: "0",
          N: "White",
          N_opacity: "0",
          O: "White",
          O_opacity: "0",
          P: "White",
          P_opacity: "0",
          Q: "White",
          Q_opacity: "0",
          R: "White",
          R_opacity: "0",
          S: "White",
          S_opacity: "0",
          TV: "0",
          TV_opacity: "0",
          U: "0",
          U_opacity: "0",
          V: "0",
          V_opacity: "0",
          W: "White",
          W_opacity: "0",
          X: "White",
          X_opacity: "0",
          XA: "White",
          XA_opacity: "0",
          XB: "White",
          XB_opacity: "0",
          XC: "White",
          XC_opacity: "0",
          XD: "White",
          XD_opacity: "0",
          XE: "White",
          XE_opacity: "0",
          XF: "White",
          XF_opacity: "0",
          XG: "White",
          XG_opacity: "0",
          XH: "White",
          XH_opacity: "0",
          XI: "White",
          XI_opacity: "0",
          XJ: "White",
          XJ_opacity: "0",
          XK: "White",
          XK_opacity: "0",
          XL: "White",
          XL_opacity: "0",
          AB: "White",
          AB_opacity: "0",
          BA: "White",
          BA_opacity: "0",
          BB: "White",
          BB_opacity: "0",
          BC: "White",
          BC_opacity: "0",
          BD: "White",
          BD_opacity: "0",
          BE: "White",
          BE_opacity: "0",
          BF: "White",
          BF_opacity: "0",
          OPA: "0",
          OPA_opacity: "0",
          XM: "White",
          XM_opacity: "0",
          XN: "White",
          XN_opacity: "0",
          XO: "White",
          XO_opacity: "0",
          XP: "White",
          XP_opacity: "0",
          XQ: "White",
          XQ_opacity: "0",
          RD: "White",
        },
        transform1: "285",
        transform2: "165",
        title: "34",
        title_2: "",
        title_3: "",
        title_4: "",
        opacity: "0",
      },
      {
        id: "dental35",
        data: {
          C: "White",
          C_opacity: "0",
          T: "White",
          T_opacity: "0",
          B: "White",
          B_opacity: "0",
          R: "White",
          R_opacity: "0",
          L: "White",
          L_opacity: "0",
          F: "White",
          F_opacity: "0",
          G: "White",
          G_opacity: "0",
          H: "White",
          H_opacity: "0",
          I: "White",
          I_opacity: "0",
          J: "Black",
          J_opacity: "0",
          K: "White",
          K_opacity: "0",
          M: "0",
          M_opacity: "0",
          N: "White",
          N_opacity: "0",
          O: "White",
          O_opacity: "0",
          P: "White",
          P_opacity: "0",
          Q: "White",
          Q_opacity: "0",
          R: "White",
          R_opacity: "0",
          S: "White",
          S_opacity: "0",
          TV: "0",
          TV_opacity: "0",
          U: "0",
          U_opacity: "0",
          V: "0",
          V_opacity: "0",
          W: "White",
          W_opacity: "0",
          X: "White",
          X_opacity: "0",
          XA: "White",
          XA_opacity: "0",
          XB: "White",
          XB_opacity: "0",
          XC: "White",
          XC_opacity: "0",
          XD: "White",
          XD_opacity: "0",
          XE: "White",
          XE_opacity: "0",
          XF: "White",
          XF_opacity: "0",
          XG: "White",
          XG_opacity: "0",
          XH: "White",
          XH_opacity: "0",
          XI: "White",
          XI_opacity: "0",
          XJ: "White",
          XJ_opacity: "0",
          XK: "White",
          XK_opacity: "0",
          XL: "White",
          XL_opacity: "0",
          AB: "White",
          AB_opacity: "0",
          BA: "White",
          BA_opacity: "0",
          BB: "White",
          BB_opacity: "0",
          BC: "White",
          BC_opacity: "0",
          BD: "White",
          BD_opacity: "0",
          BE: "White",
          BE_opacity: "0",
          BF: "White",
          BF_opacity: "0",
          OPA: "0",
          OPA_opacity: "0",
          XM: "White",
          XM_opacity: "0",
          XN: "White",
          XN_opacity: "0",
          XO: "White",
          XO_opacity: "0",
          XP: "White",
          XP_opacity: "0",
          XQ: "White",
          XQ_opacity: "0",
          RD: "White",
        },
        transform1: "310",
        transform2: "165",
        title: "35",
        title_2: "",
        title_3: "",
        title_4: "",
        opacity: "0",
      },
      {
        id: "dental36",
        data: {
          C: "White",
          C_opacity: "0",
          T: "White",
          T_opacity: "0",
          B: "White",
          B_opacity: "0",
          R: "White",
          R_opacity: "0",
          L: "White",
          L_opacity: "0",
          F: "White",
          F_opacity: "0",
          G: "White",
          G_opacity: "0",
          H: "White",
          H_opacity: "0",
          I: "White",
          I_opacity: "0",
          J: "Black",
          J_opacity: "0",
          K: "White",
          K_opacity: "0",
          M: "0",
          M_opacity: "0",
          N: "White",
          N_opacity: "0",
          O: "White",
          O_opacity: "0",
          P: "White",
          P_opacity: "0",
          Q: "White",
          Q_opacity: "0",
          R: "White",
          R_opacity: "0",
          S: "White",
          S_opacity: "0",
          TV: "0",
          TV_opacity: "0",
          U: "0",
          U_opacity: "0",
          V: "0",
          V_opacity: "0",
          W: "White",
          W_opacity: "0",
          X: "White",
          X_opacity: "0",
          XA: "White",
          XA_opacity: "0",
          XB: "White",
          XB_opacity: "0",
          XC: "White",
          XC_opacity: "0",
          XD: "White",
          XD_opacity: "0",
          XE: "White",
          XE_opacity: "0",
          XF: "White",
          XF_opacity: "0",
          XG: "White",
          XG_opacity: "0",
          XH: "White",
          XH_opacity: "0",
          XI: "White",
          XI_opacity: "0",
          XJ: "White",
          XJ_opacity: "0",
          XK: "White",
          XK_opacity: "0",
          XL: "White",
          XL_opacity: "0",
          AB: "White",
          AB_opacity: "0",
          BA: "White",
          BA_opacity: "0",
          BB: "White",
          BB_opacity: "0",
          BC: "White",
          BC_opacity: "0",
          BD: "White",
          BD_opacity: "0",
          BE: "White",
          BE_opacity: "0",
          BF: "White",
          BF_opacity: "0",
          OPA: "0",
          OPA_opacity: "0",
          XM: "White",
          XM_opacity: "0",
          XN: "White",
          XN_opacity: "0",
          XO: "White",
          XO_opacity: "0",
          XP: "White",
          XP_opacity: "0",
          XQ: "White",
          XQ_opacity: "0",
          RD: "White",
        },
        transform1: "335",
        transform2: "165",
        title: "36",
        title_2: "",
        title_3: "",
        title_4: "",
        opacity: "0",
      },
      {
        id: "dental37",
        data: {
          C: "White",
          C_opacity: "0",
          T: "White",
          T_opacity: "0",
          B: "White",
          B_opacity: "0",
          R: "White",
          R_opacity: "0",
          L: "White",
          L_opacity: "0",
          F: "White",
          F_opacity: "0",
          G: "White",
          G_opacity: "0",
          H: "White",
          H_opacity: "0",
          I: "White",
          I_opacity: "0",
          J: "Black",
          J_opacity: "0",
          K: "White",
          K_opacity: "0",
          M: "0",
          M_opacity: "0",
          N: "White",
          N_opacity: "0",
          O: "White",
          O_opacity: "0",
          P: "White",
          P_opacity: "0",
          Q: "White",
          Q_opacity: "0",
          R: "White",
          R_opacity: "0",
          S: "White",
          S_opacity: "0",
          TV: "0",
          TV_opacity: "0",
          U: "0",
          U_opacity: "0",
          V: "0",
          V_opacity: "0",
          W: "White",
          W_opacity: "0",
          X: "White",
          X_opacity: "0",
          XA: "White",
          XA_opacity: "0",
          XB: "White",
          XB_opacity: "0",
          XC: "White",
          XC_opacity: "0",
          XD: "White",
          XD_opacity: "0",
          XE: "White",
          XE_opacity: "0",
          XF: "White",
          XF_opacity: "0",
          XG: "White",
          XG_opacity: "0",
          XH: "White",
          XH_opacity: "0",
          XI: "White",
          XI_opacity: "0",
          XJ: "White",
          XJ_opacity: "0",
          XK: "White",
          XK_opacity: "0",
          XL: "White",
          XL_opacity: "0",
          AB: "White",
          AB_opacity: "0",
          BA: "White",
          BA_opacity: "0",
          BB: "White",
          BB_opacity: "0",
          BC: "White",
          BC_opacity: "0",
          BD: "White",
          BD_opacity: "0",
          BE: "White",
          BE_opacity: "0",
          BF: "White",
          BF_opacity: "0",
          OPA: "0",
          OPA_opacity: "0",
          XM: "White",
          XM_opacity: "0",
          XN: "White",
          XN_opacity: "0",
          XO: "White",
          XO_opacity: "0",
          XP: "White",
          XP_opacity: "0",
          XQ: "White",
          XQ_opacity: "0",
          RD: "White",
        },
        transform1: "360",
        transform2: "165",
        title: "37",
        title_2: "",
        title_3: "",
        title_4: "",
        opacity: "0",
      },
      {
        id: "dental38",
        data: {
          C: "White",
          C_opacity: "0",
          T: "White",
          T_opacity: "0",
          B: "White",
          B_opacity: "0",
          R: "White",
          R_opacity: "0",
          L: "White",
          L_opacity: "0",
          F: "White",
          F_opacity: "0",
          G: "White",
          G_opacity: "0",
          H: "White",
          H_opacity: "0",
          I: "White",
          I_opacity: "0",
          J: "Black",
          J_opacity: "0",
          K: "White",
          K_opacity: "0",
          M: "0",
          M_opacity: "0",
          N: "White",
          N_opacity: "0",
          O: "White",
          O_opacity: "0",
          P: "White",
          P_opacity: "0",
          Q: "White",
          Q_opacity: "0",
          R: "White",
          R_opacity: "0",
          S: "White",
          S_opacity: "0",
          TV: "0",
          TV_opacity: "0",
          U: "0",
          U_opacity: "0",
          V: "0",
          V_opacity: "0",
          W: "White",
          W_opacity: "0",
          X: "White",
          X_opacity: "0",
          XA: "White",
          XA_opacity: "0",
          XB: "White",
          XB_opacity: "0",
          XC: "White",
          XC_opacity: "0",
          XD: "White",
          XD_opacity: "0",
          XE: "White",
          XE_opacity: "0",
          XF: "White",
          XF_opacity: "0",
          XG: "White",
          XG_opacity: "0",
          XH: "White",
          XH_opacity: "0",
          XI: "White",
          XI_opacity: "0",
          XJ: "White",
          XJ_opacity: "0",
          XK: "White",
          XK_opacity: "0",
          XL: "White",
          XL_opacity: "0",
          AB: "White",
          AB_opacity: "0",
          BA: "White",
          BA_opacity: "0",
          BB: "White",
          BB_opacity: "0",
          BC: "White",
          BC_opacity: "0",
          BD: "White",
          BD_opacity: "0",
          BE: "White",
          BE_opacity: "0",
          BF: "White",
          BF_opacity: "0",
          OPA: "0",
          OPA_opacity: "0",
          XM: "White",
          XM_opacity: "0",
          XN: "White",
          XN_opacity: "0",
          XO: "White",
          XO_opacity: "0",
          XP: "White",
          XP_opacity: "0",
          XQ: "White",
          XQ_opacity: "0",
          RD: "White",
        },
        transform1: "385",
        transform2: "165",
        title: "38",
        title_2: "",
        title_3: "",
        title_4: "",
        opacity: "0",
      },
    ];
  }

  allDentalAfter = data;

  //hasil
  function parseSVG(s) {
    var div = document.createElementNS("http://www.w3.org/1999/xhtml", "div");
    div.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg">' + s + "</svg>";
    var frag = document.createDocumentFragment();
    while (div.firstChild.firstChild)
      frag.appendChild(div.firstChild.firstChild);
    return frag;
  }
  var arrId4Sisi = [
    "dental13",
    "dental12",
    "dental11",
    "dental21",
    "dental22",
    "dental23",
    "dental53",
    "dental52",
    "dental51",
    "dental61",
    "dental62",
    "dental63",
    "dental83",
    "dental82",
    "dental81",
    "dental71",
    "dental72",
    "dental73",
    "dental43",
    "dental42",
    "dental41",
    "dental31",
    "dental32",
    "dental33",
  ];
  for (var i = 0; i < data.length; i++) {
    // console.log('data',data[i]);
    $.ajax({
      type: "GET",
      url: link + `doctor/getTemp/dental${data[i].title}/${id_pemeriksaan}`,
      dataType: "json",
      success: (hasil) => {
        console.log(hasil.ket_pemeriksaan + "Hanya testing");
        // console.log("keterangan" + hasil.idSvg);
        document.getElementById("keterangan" + hasil.idSvg).innerHTML =
          hasil.ket_pemeriksaan;
      },
    });
    if (arrId4Sisi.indexOf(data[i].id) > -1) {
      //   console.log('arrId4Sisi', arrId4Sisi);
      var svg =
        '<g id="' +
        data[i].id +
        '" class="' +
        data[i].id +
        '" transform="translate(' +
        data[i].transform1 +
        "," +
        data[i].transform2 +
        ')">' +
        '<polygon points="0,0   20,0    15,10    0,10" fill="' +
        data[i].data.F +
        '" value="6" stroke-width="0.5" opacity="1" class="ausente" id="F" onclick="clickSvg_After(this);"/></polygon>' +
        '<polygon points="20,0  20,0    20,20   15,10" fill="' +
        data[i].data.G +
        '" value="7" stroke-width="0.5" opacity="1" class="ausente" id="G" onclick="clickSvg_After(this);"/></polygon>' +
        '<polygon points="0,0   20,0    15,10    0,10" fill="' +
        data[i].data.T +
        '" stroke="navy" stroke-width="0.5" id="T" opacity="1" onclick="clickSvg_After(this);"></polygon>' +
        '<polygon points="5,10  15,10   20,20   0,20" fill="' +
        data[i].data.B +
        '" stroke="navy" stroke-width="0.5" id="B' +
        data[i].id +
        '" opacity="1" onclick="clickSvg_After(this);" class="B' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="20,0  20,0    20,20   15,10" fill="' +
        data[i].data.RD +
        '" stroke="navy" stroke-width="0.5" id="RD" opacity="1" onclick="clickSvg_After(this);"></polygon>' +
        '<polygon points="0,0   5,10     5,10    0,20" fill="' +
        data[i].data.L +
        '" stroke="navy" stroke-width="0.5" id="L" opacity="1" onclick="clickSvg_After(this);"></polygon>' +
        '<polygon points="0,2 2,2 20,20 18,20" fill="' +
        data[i].data.H +
        '" stroke="' +
        data[i].data.H +
        '" stroke-width="0.5" id="H' +
        data[i].id +
        '" opacity="' +
        data[i].data.H_opacity +
        '" onclick="clickSvg_After(this);" class="ausente H' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="17,2 20,2 2,20 2,17" fill="' +
        data[i].data.H +
        '" stroke="' +
        data[i].data.H +
        '" stroke-width="0.5" id="H' +
        data[i].id +
        '" opacity="' +
        data[i].data.H_opacity +
        '" onclick="clickSvg_After(this);" class="ausente H' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="1,20   1,20     1,19    1,20" fill="' +
        data[i].data.M +
        '" stroke="navy" stroke-width="0.2" id="M' +
        data[i].id +
        '" opacity="' +
        data[i].data.M +
        '" onclick="clickSvg_After(this);" class="ausente4 M' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="2,16   2,16     2,19    2,20" fill="' +
        data[i].data.M +
        '" stroke="navy" stroke-width="0.2" id="M' +
        data[i].id +
        '" opacity="' +
        data[i].data.M +
        '" onclick="clickSvg_After(this);" class="ausente4 M' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="3,14   3,14     3,19    3,20" fill="' +
        data[i].data.M +
        '" stroke="navy" stroke-width="0.2" id="M' +
        data[i].id +
        '" opacity="' +
        data[i].data.M +
        '" onclick="clickSvg_After(this);" class="ausente4 M' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="4,12   4,12     4,19    4,20" fill="' +
        data[i].data.M +
        '" stroke="navy" stroke-width="0.2" id="M' +
        data[i].id +
        '" opacity="' +
        data[i].data.M +
        '" onclick="clickSvg_After(this);" class="ausente4 M' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="5,10   5,10     5,19    5,20" fill="' +
        data[i].data.M +
        '" stroke="navy" stroke-width="0.2" id="M' +
        data[i].id +
        '" opacity="' +
        data[i].data.M +
        '" onclick="clickSvg_After(this);" class="ausente4 M' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="6,10   6,10     6,19    6,20" fill="' +
        data[i].data.M +
        '" stroke="navy" stroke-width="0.2" id="M' +
        data[i].id +
        '" opacity="' +
        data[i].data.M +
        '" onclick="clickSvg_After(this);" class="ausente4 M' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="7,10   7,10     7,19    7,20" fill="' +
        data[i].data.M +
        '" stroke="navy" stroke-width="0.2" id="M' +
        data[i].id +
        '" opacity="' +
        data[i].data.M +
        '" onclick="clickSvg_After(this);" class="ausente4 M' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="8,10   8,10     8,19    8,20" fill="' +
        data[i].data.M +
        '" stroke="navy" stroke-width="0.2" id="M' +
        data[i].id +
        '" opacity="' +
        data[i].data.M +
        '" onclick="clickSvg_After(this);" class="ausente4 M' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="9,10   9,10     9,19    9,20" fill="' +
        data[i].data.M +
        '" stroke="navy" stroke-width="0.2" id="M' +
        data[i].id +
        '" opacity="' +
        data[i].data.M +
        '" onclick="clickSvg_After(this);" class="ausente4 M' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="10,10   10,10     10,19    10,20" fill="' +
        data[i].data.M +
        '" stroke="navy" stroke-width="0.2" id="M' +
        data[i].id +
        '" opacity="' +
        data[i].data.M +
        '" onclick="clickSvg_After(this);" class="ausente4 M' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="11,10   11,10     11,19    11,20" fill="' +
        data[i].data.M +
        '" stroke="navy" stroke-width="0.2" id="M' +
        data[i].id +
        '" opacity="' +
        data[i].data.M +
        '" onclick="clickSvg_After(this);" class="ausente4 M' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="12,10   12,10     12,19    12,20" fill="' +
        data[i].data.M +
        '" stroke="navy" stroke-width="0.2" id="M' +
        data[i].id +
        '" opacity="' +
        data[i].data.M +
        '" onclick="clickSvg_After(this);" class="ausente4 M' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="13,10   13,10     13,19    13,20" fill="' +
        data[i].data.M +
        '" stroke="navy" stroke-width="0.2" id="M' +
        data[i].id +
        '" opacity="' +
        data[i].data.M +
        '" onclick="clickSvg_After(this);" class="ausente4 M' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="14,10   14,10     14,19    14,20" fill="' +
        data[i].data.M +
        '" stroke="navy" stroke-width="0.2" id="M' +
        data[i].id +
        '" opacity="' +
        data[i].data.M +
        '" onclick="clickSvg_After(this);" class="ausente4 M' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="15,10   15,10     15,19    15,20" fill="' +
        data[i].data.M +
        '" stroke="navy" stroke-width="0.2" id="M' +
        data[i].id +
        '" opacity="' +
        data[i].data.M +
        '" onclick="clickSvg_After(this);" class="ausente4 M' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="16,12   16,12     16,19    16,20" fill="' +
        data[i].data.M +
        '" stroke="navy" stroke-width="0.2" id="M' +
        data[i].id +
        '" opacity="' +
        data[i].data.M +
        '" onclick="clickSvg_After(this);" class="ausente4 M' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="17,14   17,14     17,19    17,20" fill="' +
        data[i].data.M +
        '" stroke="navy" stroke-width="0.2" id="M' +
        data[i].id +
        '" opacity="' +
        data[i].data.M +
        '" onclick="clickSvg_After(this);" class="ausente4 M' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="18,16   18,16     18,19    18,20" fill="' +
        data[i].data.M +
        '" stroke="navy" stroke-width="0.2" id="M' +
        data[i].id +
        '" opacity="' +
        data[i].data.M +
        '" onclick="clickSvg_After(this);" class="ausente4 M' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="19,20   19,20     19,19    19,20" fill="' +
        data[i].data.M +
        '" stroke="navy" stroke-width="0.2" id="M' +
        data[i].id +
        '" opacity="' +
        data[i].data.M +
        '" onclick="clickSvg_After(this);" class="ausente4 M' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="0,0   20,0     20,0    20,0" fill="' +
        data[i].data.P +
        '" stroke="' +
        data[i].data.P +
        '" stroke-width="2.5" id="P' +
        data[i].id +
        '" opacity="' +
        data[i].data.P_opacity +
        '" onclick="clickSvg_After(this);" class="ausente7 P' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="0,20   20,20     20,20    20,20" fill="' +
        data[i].data.P +
        '" stroke="' +
        data[i].data.P +
        '" stroke-width="2.5" id="P' +
        data[i].id +
        '" opacity="' +
        data[i].data.P_opacity +
        '" onclick="clickSvg_After(this);" class="ausente7 P' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="0,1   0,1     0,20    0,20" fill="' +
        data[i].data.P +
        '" stroke="' +
        data[i].data.P +
        '" stroke-width="2.5" id="P' +
        data[i].id +
        '" opacity="' +
        data[i].data.P_opacity +
        '" onclick="clickSvg_After(this);" class="ausente7 P' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="20,1   20,1     20,20    20,20" fill="' +
        data[i].data.P +
        '" stroke="' +
        data[i].data.P +
        '" stroke-width="2.5" id="P' +
        data[i].id +
        '" opacity="' +
        data[i].data.P_opacity +
        '" onclick="clickSvg_After(this);" class="ausente7 P' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="5,20   5,20     5,20    11,30" fill="' +
        data[i].data.Q +
        '" stroke="' +
        data[i].data.Q +
        '" stroke-width="2" id="Q' +
        data[i].id +
        '" opacity="' +
        data[i].data.Q_opacity +
        '" onclick="clickSvg_After(this);" class="ausente8 Q' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="15,20   15,20     15,20    11,30" fill="' +
        data[i].data.Q +
        '" stroke="' +
        data[i].data.Q +
        '" stroke-width="2" id="Q' +
        data[i].id +
        '" opacity="' +
        data[i].data.Q_opacity +
        '" onclick="clickSvg_After(this);" class="ausente8 Q' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="5,20   15,20    15,20   10,30" fill="' +
        data[i].data.R +
        '" stroke="navy" stroke-width="2" id="R' +
        data[i].id +
        '" opacity="' +
        data[i].data.R_opacity +
        '" onclick="clickSvg_After(this);" class="ausente9 R' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="5,2   5,2     5,2    11,20" fill="' +
        data[i].data.S +
        '" stroke="' +
        data[i].data.S +
        '" stroke-width="2" id="S' +
        data[i].id +
        '" opacity="' +
        data[i].data.S_opacity +
        '" onclick="clickSvg_After(this);" class="ausente10 S' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="15,2   15,2     15,2    11,20" fill="' +
        data[i].data.S +
        '" stroke="' +
        data[i].data.S +
        '" stroke-width="2" id="S' +
        data[i].id +
        '" opacity="' +
        data[i].data.S_opacity +
        '" onclick="clickSvg_After(this);" class="ausente10 S' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="1,2   1,2     1,0    1,0" fill="' +
        data[i].data.TV +
        '" stroke="navy" stroke-width="0.2" id="TV' +
        data[i].id +
        '" opacity="' +
        data[i].data.TV +
        '" onclick="clickSvg_After(this);" class="ausente41 TV' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="2,4   2,4     2,0    2,0" fill="' +
        data[i].data.TV +
        '" stroke="navy" stroke-width="0.2" id="TV' +
        data[i].id +
        '" opacity="' +
        data[i].data.TV +
        '" onclick="clickSvg_After(this);" class="ausente41 TV' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="3,6   3,6     3,0    3,0" fill="' +
        data[i].data.TV +
        '" stroke="navy" stroke-width="0.2" id="TV' +
        data[i].id +
        '" opacity="' +
        data[i].data.TV +
        '" onclick="clickSvg_After(this);" class="ausente41 TV' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="4,8   4,8     4,0    4,0" fill="' +
        data[i].data.TV +
        '" stroke="navy" stroke-width="0.2" id="TV' +
        data[i].id +
        '" opacity="' +
        data[i].data.TV +
        '" onclick="clickSvg_After(this);" class="ausente41 TV' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="5,10   5,10     5,0    5,0" fill="' +
        data[i].data.TV +
        '" stroke="navy" stroke-width="0.2" id="TV' +
        data[i].id +
        '" opacity="' +
        data[i].data.TV +
        '" onclick="clickSvg_After(this);" class="ausente41 TV' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="6,10   6,10     6,0    6,0" fill="' +
        data[i].data.TV +
        '" stroke="navy" stroke-width="0.2" id="TV' +
        data[i].id +
        '" opacity="' +
        data[i].data.TV +
        '" onclick="clickSvg_After(this);" class="ausente41 TV' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="7,10   7,10     7,0    7,0" fill="' +
        data[i].data.TV +
        '" stroke="navy" stroke-width="0.2" id="TV' +
        data[i].id +
        '" opacity="' +
        data[i].data.TV +
        '" onclick="clickSvg_After(this);" class="ausente41 TV' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="8,10   8,10     8,0    8,0" fill="' +
        data[i].data.TV +
        '" stroke="navy" stroke-width="0.2" id="TV' +
        data[i].id +
        '" opacity="' +
        data[i].data.TV +
        '" onclick="clickSvg_After(this);" class="ausente41 TV' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="9,10   9,10     9,0    9,0" fill="' +
        data[i].data.TV +
        '" stroke="navy" stroke-width="0.2" id="TV' +
        data[i].id +
        '" opacity="' +
        data[i].data.TV +
        '" onclick="clickSvg_After(this);" class="ausente41 TV' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="10,10   10,10     10,0    10,0" fill="' +
        data[i].data.TV +
        '" stroke="navy" stroke-width="0.2" id="TV' +
        data[i].id +
        '" opacity="' +
        data[i].data.TV +
        '" onclick="clickSvg_After(this);" class="ausente41 TV' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="11,10   11,10     11,0    11,0" fill="' +
        data[i].data.TV +
        '" stroke="navy" stroke-width="0.2" id="TV' +
        data[i].id +
        '" opacity="' +
        data[i].data.TV +
        '" onclick="clickSvg_After(this);" class="ausente41 TV' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="12,10   12,10     12,0    12,0" fill="' +
        data[i].data.TV +
        '" stroke="navy" stroke-width="0.2" id="TV' +
        data[i].id +
        '" opacity="' +
        data[i].data.TV +
        '" onclick="clickSvg_After(this);" class="ausente41 TV' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="13,10   13,10     13,0    13,0" fill="' +
        data[i].data.TV +
        '" stroke="navy" stroke-width="0.2" id="TV' +
        data[i].id +
        '" opacity="' +
        data[i].data.TV +
        '" onclick="clickSvg_After(this);" class="ausente41 TV' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="14,10   14,10     14,0    14,0" fill="' +
        data[i].data.TV +
        '" stroke="navy" stroke-width="0.2" id="TV' +
        data[i].id +
        '" opacity="' +
        data[i].data.TV +
        '" onclick="clickSvg_After(this);" class="ausente41 TV' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="15,10   15,10     15,0    15,0" fill="' +
        data[i].data.TV +
        '" stroke="navy" stroke-width="0.2" id="TV' +
        data[i].id +
        '" opacity="' +
        data[i].data.TV +
        '" onclick="clickSvg_After(this);" class="ausente41 TV' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="16,8   16,8     16,0    16,0" fill="' +
        data[i].data.TV +
        '" stroke="navy" stroke-width="0.2" id="TV' +
        data[i].id +
        '" opacity="' +
        data[i].data.TV +
        '" onclick="clickSvg_After(this);" class="ausente41 TV' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="17,6   17,6     17,0    17,0" fill="' +
        data[i].data.TV +
        '" stroke="navy" stroke-width="0.2" id="TV' +
        data[i].id +
        '" opacity="' +
        data[i].data.TV +
        '" onclick="clickSvg_After(this);" class="ausente41 TV' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="18,4   18,4     18,0    18,0" fill="' +
        data[i].data.TV +
        '" stroke="navy" stroke-width="0.2" id="TV' +
        data[i].id +
        '" opacity="' +
        data[i].data.TV +
        '" onclick="clickSvg_After(this);" class="ausente41 TV' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="19,2   19,2     19,0    19,0" fill="' +
        data[i].data.TV +
        '" stroke="navy" stroke-width="0.2" id="TV' +
        data[i].id +
        '" opacity="' +
        data[i].data.TV +
        '" onclick="clickSvg_After(this);" class="ausente41 TV' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="0,2   1,2     1,2    1,2" fill="' +
        data[i].data.U +
        '" stroke="navy" stroke-width="0.2" id="U' +
        data[i].id +
        '" opacity="' +
        data[i].data.U +
        '" onclick="clickSvg_After(this);" class="ausente42 U' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="0,3   1,3     1,3    1,3" fill="' +
        data[i].data.U +
        '" stroke="navy" stroke-width="0.2" id="U' +
        data[i].id +
        '" opacity="' +
        data[i].data.U +
        '" onclick="clickSvg_After(this);" class="ausente42 U' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="0,4   2,4     2,4    2,4" fill="' +
        data[i].data.U +
        '" stroke="navy" stroke-width="0.2" id="U' +
        data[i].id +
        '" opacity="' +
        data[i].data.U +
        '" onclick="clickSvg_After(this);" class="ausente42 U' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="0,5   2,5     2,5    2,5" fill="' +
        data[i].data.U +
        '" stroke="navy" stroke-width="0.2" id="U' +
        data[i].id +
        '" opacity="' +
        data[i].data.U +
        '" onclick="clickSvg_After(this);" class="ausente42 U' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="0,6   3,6     3,6    3,6" fill="' +
        data[i].data.U +
        '" stroke="navy" stroke-width="0.2" id="U' +
        data[i].id +
        '" opacity="' +
        data[i].data.U +
        '" onclick="clickSvg_After(this);" class="ausente42 U' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="0,7   3,7     3,7    3,7" fill="' +
        data[i].data.U +
        '" stroke="navy" stroke-width="0.2" id="U' +
        data[i].id +
        '" opacity="' +
        data[i].data.U +
        '" onclick="clickSvg_After(this);" class="ausente42 U' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="0,8   4,8     4,8    4,8" fill="' +
        data[i].data.U +
        '" stroke="navy" stroke-width="0.2" id="U' +
        data[i].id +
        '" opacity="' +
        data[i].data.U +
        '" onclick="clickSvg_After(this);" class="ausente42 U' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="0,9   4,9     2,9    2,9" fill="' +
        data[i].data.U +
        '" stroke="navy" stroke-width="0.2" id="U' +
        data[i].id +
        '" opacity="' +
        data[i].data.U +
        '" onclick="clickSvg_After(this);" class="ausente42 U' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="0,10   5,10     5,10    5,10" fill="' +
        data[i].data.U +
        '" stroke="navy" stroke-width="0.2" id="U' +
        data[i].id +
        '" opacity="' +
        data[i].data.U +
        '" onclick="clickSvg_After(this);" class="ausente42 U' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="0,11   4,11     4,11    4,11" fill="' +
        data[i].data.U +
        '" stroke="navy" stroke-width="0.2" id="U' +
        data[i].id +
        '" opacity="' +
        data[i].data.U +
        '" onclick="clickSvg_After(this);" class="ausente42 U' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="0,12   4,12     4,12    4,12" fill="' +
        data[i].data.U +
        '" stroke="navy" stroke-width="0.2" id="U' +
        data[i].id +
        '" opacity="' +
        data[i].data.U +
        '" onclick="clickSvg_After(this);" class="ausente42 U' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="0,13   3,13     3,13    3,13" fill="' +
        data[i].data.U +
        '" stroke="navy" stroke-width="0.2" id="U' +
        data[i].id +
        '" opacity="' +
        data[i].data.U +
        '" onclick="clickSvg_After(this);" class="ausente42 U' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="0,14   3,14     3,14    3,14" fill="' +
        data[i].data.U +
        '" stroke="navy" stroke-width="0.2" id="U' +
        data[i].id +
        '" opacity="' +
        data[i].data.U +
        '" onclick="clickSvg_After(this);" class="ausente42 U' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="0,15   2,15     2,15    2,15" fill="' +
        data[i].data.U +
        '" stroke="navy" stroke-width="0.2" id="U' +
        data[i].id +
        '" opacity="' +
        data[i].data.U +
        '" onclick="clickSvg_After(this);" class="ausente42 U' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="0,16   2,16     2,16    2,16" fill="' +
        data[i].data.U +
        '" stroke="navy" stroke-width="0.2" id="U' +
        data[i].id +
        '" opacity="' +
        data[i].data.U +
        '" onclick="clickSvg_After(this);" class="ausente42 U' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="0,17   1,17     1,17    1,17" fill="' +
        data[i].data.U +
        '" stroke="navy" stroke-width="0.2" id="U' +
        data[i].id +
        '" opacity="' +
        data[i].data.U +
        '" onclick="clickSvg_After(this);" class="ausente42 U' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="0,18   1,18     1,18    1,18" fill="' +
        data[i].data.U +
        '" stroke="navy" stroke-width="0.2" id="U' +
        data[i].id +
        '" opacity="' +
        data[i].data.U +
        '" onclick="clickSvg_After(this);" class="ausente42 U' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="19,2   20,2     20,2    20,2" fill="' +
        data[i].data.V +
        '" stroke="navy" stroke-width="0.2" id="V' +
        data[i].id +
        '" opacity="' +
        data[i].data.V +
        '" onclick="clickSvg_After(this);" class="ausente43 V' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="19,3   20,3     20,3    20,3" fill="' +
        data[i].data.V +
        '" stroke="navy" stroke-width="0.2" id="V' +
        data[i].id +
        '" opacity="' +
        data[i].data.V +
        '" onclick="clickSvg_After(this);" class="ausente43 V' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="18,4   20,4     20,4    20,4" fill="' +
        data[i].data.V +
        '" stroke="navy" stroke-width="0.2" id="V' +
        data[i].id +
        '" opacity="' +
        data[i].data.V +
        '" onclick="clickSvg_After(this);" class="ausente43 V' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="18,5   20,5     20,5    20,5" fill="' +
        data[i].data.V +
        '" stroke="navy" stroke-width="0.2" id="V' +
        data[i].id +
        '" opacity="' +
        data[i].data.V +
        '" onclick="clickSvg_After(this);" class="ausente43 V' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="17,6   20,6     20,6    20,6" fill="' +
        data[i].data.V +
        '" stroke="navy" stroke-width="0.2" id="V' +
        data[i].id +
        '" opacity="' +
        data[i].data.V +
        '" onclick="clickSvg_After(this);" class="ausente43 V' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="17,7   20,7     20,7    20,7" fill="' +
        data[i].data.V +
        '" stroke="navy" stroke-width="0.2" id="V' +
        data[i].id +
        '" opacity="' +
        data[i].data.V +
        '" onclick="clickSvg_After(this);" class="ausente43 V' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="16,8   20,8     20,8    20,8" fill="' +
        data[i].data.V +
        '" stroke="navy" stroke-width="0.2" id="V' +
        data[i].id +
        '" opacity="' +
        data[i].data.V +
        '" onclick="clickSvg_After(this);" class="ausente43 V' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="16,9   20,9     20,9    20,9" fill="' +
        data[i].data.V +
        '" stroke="navy" stroke-width="0.2" id="V' +
        data[i].id +
        '" opacity="' +
        data[i].data.V +
        '" onclick="clickSvg_After(this);" class="ausente43 V' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="15,10   20,10     20,10    20,10" fill="' +
        data[i].data.V +
        '" stroke="navy" stroke-width="0.2" id="V' +
        data[i].id +
        '" opacity="' +
        data[i].data.V +
        '" onclick="clickSvg_After(this);" class="ausente43 V' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="16,11   20,11     20,11    20,11" fill="' +
        data[i].data.V +
        '" stroke="navy" stroke-width="0.2" id="V' +
        data[i].id +
        '" opacity="' +
        data[i].data.V +
        '" onclick="clickSvg_After(this);" class="ausente43 V' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="16,12   20,12     20,12    20,12" fill="' +
        data[i].data.V +
        '" stroke="navy" stroke-width="0.2" id="V' +
        data[i].id +
        '" opacity="' +
        data[i].data.V +
        '" onclick="clickSvg_After(this);" class="ausente43 V' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="17,13   20,13     20,13    20,13" fill="' +
        data[i].data.V +
        '" stroke="navy" stroke-width="0.2" id="V' +
        data[i].id +
        '" opacity="' +
        data[i].data.V +
        '" onclick="clickSvg_After(this);" class="ausente43 V' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="17,14   20,14     20,14    20,14" fill="' +
        data[i].data.V +
        '" stroke="navy" stroke-width="0.2" id="V' +
        data[i].id +
        '" opacity="' +
        data[i].data.V +
        '" onclick="clickSvg_After(this);" class="ausente43 V' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="18,15   20,15     20,15    20,15" fill="' +
        data[i].data.V +
        '" stroke="navy" stroke-width="0.2" id="V' +
        data[i].id +
        '" opacity="' +
        data[i].data.V +
        '" onclick="clickSvg_After(this);" class="ausente43 V' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="18,16   20,16     20,16    20,16" fill="' +
        data[i].data.V +
        '" stroke="navy" stroke-width="0.2" id="V' +
        data[i].id +
        '" opacity="' +
        data[i].data.V +
        '" onclick="clickSvg_After(this);" class="ausente43 V' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="19,17   20,17     20,17    20,17" fill="' +
        data[i].data.V +
        '" stroke="navy" stroke-width="0.2" id="V' +
        data[i].id +
        '" opacity="' +
        data[i].data.V +
        '" onclick="clickSvg_After(this);" class="ausente43 V' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="19,18   20,18     20,18    20,18" fill="' +
        data[i].data.V +
        '" stroke="navy" stroke-width="0.2" id="V' +
        data[i].id +
        '" opacity="' +
        data[i].data.V +
        '" onclick="clickSvg_After(this);" class="ausente43 V' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="15,10   15,10     20,20    20,20" fill="' +
        data[i].data.X +
        '" stroke="navy" stroke-width="1.5" id="X" opacity="' +
        data[i].data.X_opacity +
        '" onclick="clickSvg_After(this);" class="ausente45"></polygon>' +
        '<polygon points="5,10   5,10     0,20    0,20" fill="' +
        data[i].data.X +
        '" stroke="navy" stroke-width="1.5" id="X" opacity="' +
        data[i].data.X_opacity +
        '" onclick="clickSvg_After(this);" class="ausente45"></polygon>' +
        '<polygon points="15,10   15,10     20,0    20,0" fill="' +
        data[i].data.X +
        '" stroke="navy" stroke-width="1.5" id="X" opacity="' +
        data[i].data.X_opacity +
        '" onclick="clickSvg_After(this);" class="ausente45"></polygon>' +
        '<polygon points="5,10   5,10     0,0    0,0" fill="' +
        data[i].data.X +
        '" stroke="navy" stroke-width="1.5" id="X" opacity="' +
        data[i].data.X_opacity +
        '" onclick="clickSvg_After(this);" class="ausente45"></polygon>' +
        '<polygon points="5,10   5,10     15,10    15,10" fill="' +
        data[i].data.X +
        '" stroke="navy" stroke-width="1.5" id="X" opacity="' +
        data[i].data.X_opacity +
        '" onclick="clickSvg_After(this);" class="ausente45"></polygon>' +
        // '<polygon points="5,10   5,10     0,0    0,0" fill="'+data[i].data.X+'" stroke="navy" stroke-width="1.5" id="X" opacity="1" onclick="clickSvg_After(this);" ></polygon>'+
        '<polygon points="20,0   20,0     0,0    0,0" fill="' +
        data[i].data.X +
        '" stroke="navy" stroke-width="1.5" id="X" opacity="' +
        data[i].data.X_opacity +
        '" onclick="clickSvg_After(this);" class="ausente45"></polygon>' +
        '<polygon points="20,0   20,0     20,20    20,20" fill="' +
        data[i].data.X +
        '" stroke="navy" stroke-width="1.5" id="X" opacity="' +
        data[i].data.X_opacity +
        '" onclick="clickSvg_After(this);" class="ausente45"></polygon>' +
        '<polygon points="20,20   20,20     0,20    0,20" fill="' +
        data[i].data.X +
        '" stroke="navy" stroke-width="1.5" id="X" opacity="' +
        data[i].data.X_opacity +
        '" onclick="clickSvg_After(this);" class="ausente45"></polygon>' +
        '<polygon points="0,0   0,0     0,20    0,20" fill="' +
        data[i].data.X +
        '" stroke="navy" stroke-width="1.5" id="X" opacity="' +
        data[i].data.X_opacity +
        '" onclick="clickSvg_After(this);" class="ausente45"></polygon>' +
        '<polygon points="3,0   3,0     3,19    3,20" fill="' +
        data[i].data.AB +
        '" stroke="' +
        data[i].data.AB +
        '" stroke-width="0.5" id="AB' +
        data[i].id +
        '" opacity="' +
        data[i].data.AB_opacity +
        '" onclick="clickSvg_After(this);" class="ausente59 AB' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="5,0   5,0     5,19    5,20" fill="' +
        data[i].data.AB +
        '" stroke="' +
        data[i].data.AB +
        '" stroke-width="0.5" id="AB' +
        data[i].id +
        '" opacity="' +
        data[i].data.AB_opacity +
        '" onclick="clickSvg_After(this);" class="ausente59 AB' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="7,0   7,10     7,19    7,20" fill="' +
        data[i].data.AB +
        '" stroke="' +
        data[i].data.AB +
        '" stroke-width="0.5" id="AB' +
        data[i].id +
        '" opacity="' +
        data[i].data.AB_opacity +
        '" onclick="clickSvg_After(this);" class="ausente59 AB' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="9,0   9,0     9,19    9,20" fill="' +
        data[i].data.AB +
        '" stroke="' +
        data[i].data.AB +
        '" stroke-width="0.5" id="AB' +
        data[i].id +
        '" opacity="' +
        data[i].data.AB_opacity +
        '" onclick="clickSvg_After(this);" class="ausente59 AB' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="11,0   11,0     11,19    11,20" fill="' +
        data[i].data.AB +
        '" stroke="' +
        data[i].data.AB +
        '" stroke-width="0.5" id="AB' +
        data[i].id +
        '" opacity="' +
        data[i].data.AB_opacity +
        '" onclick="clickSvg_After(this);" class="ausente59 AB' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="13,0   13,0     13,19    13,20" fill="' +
        data[i].data.AB +
        '" stroke="' +
        data[i].data.AB +
        '" stroke-width="0.5" id="AB' +
        data[i].id +
        '" opacity="' +
        data[i].data.AB_opacity +
        '" onclick="clickSvg_After(this);" class="ausente59 AB' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="15,0   15,0     15,19    15,20" fill="' +
        data[i].data.AB +
        '" stroke="' +
        data[i].data.AB +
        '" stroke-width="0.5" id="AB' +
        data[i].id +
        '" opacity="' +
        data[i].data.AB_opacity +
        '" onclick="clickSvg_After(this);" class="ausente59 AB' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="17,0   17,0     17,19    17,20" fill="' +
        data[i].data.AB +
        '" stroke="' +
        data[i].data.AB +
        '" stroke-width="0.5" id="AB' +
        data[i].id +
        '" opacity="' +
        data[i].data.AB_opacity +
        '" onclick="clickSvg_After(this);" class="ausente59 AB' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="25,35   25,35     0,35    0,35" fill="' +
        data[i].data.BA +
        '" stroke="' +
        data[i].data.BA +
        '" stroke-width="2" id="BA' +
        data[i].id +
        '" opacity="' +
        data[i].data.BA_opacity +
        '" onclick="clickSvg_After(this);" class="ausente60 BA' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="25,35   25,35     0,35    0,35" fill="' +
        data[i].data.BB +
        '" stroke="' +
        data[i].data.BB +
        '" stroke-width="2" id="BB' +
        data[i].id +
        '" opacity="' +
        data[i].data.BB_opacity +
        '" onclick="clickSvg_After(this);" class="ausente61 BB' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="25,35   25,35     0,35    0,35" fill="' +
        data[i].data.BC +
        '" stroke="' +
        data[i].data.BC +
        '" stroke-width="2" id="BC' +
        data[i].id +
        '" opacity="' +
        data[i].data.BC_opacity +
        '" onclick="clickSvg_After(this);" class="ausente62 BC' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="0,30   0,35     0,20    0,20" fill="' +
        data[i].data.BD +
        '" stroke="' +
        data[i].data.BD +
        '" stroke-width="2" id="BD' +
        data[i].id +
        '" opacity="' +
        data[i].data.BD_opacity +
        '" onclick="clickSvg_After(this);" class="ausente63 BD' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="20,35   20,35     20,20    20,20" fill="' +
        data[i].data.BE +
        '" stroke="' +
        data[i].data.BE +
        '" stroke-width="2" id="BE' +
        data[i].id +
        '" opacity="' +
        data[i].data.BE_opacity +
        '" onclick="clickSvg_After(this);" class="ausente64 BE' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="3,0   3,0     3,19    3,20" fill="' +
        data[i].data.BF +
        '" stroke="' +
        data[i].data.BF +
        '" stroke-width="0.5" id="BF' +
        data[i].id +
        '" opacity="' +
        data[i].data.BF_opacity +
        '" onclick="clickSvg_After(this);" class="ausente65 BF' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="5,0   5,0     5,19    5,20" fill="' +
        data[i].data.BF +
        '" stroke="' +
        data[i].data.BF +
        '" stroke-width="0.5" id="BF' +
        data[i].id +
        '" opacity="' +
        data[i].data.BF_opacity +
        '" onclick="clickSvg_After(this);" class="ausente65 BF' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="7,0   7,10     7,19    7,20" fill="' +
        data[i].data.BF +
        '" stroke="' +
        data[i].data.BF +
        '" stroke-width="0.5" id="BF' +
        data[i].id +
        '" opacity="' +
        data[i].data.BF_opacity +
        '" onclick="clickSvg_After(this);" class="ausente65 BF' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="9,0   9,0     9,19    9,20" fill="' +
        data[i].data.BF +
        '" stroke="' +
        data[i].data.BF +
        '" stroke-width="0.5" id="BF' +
        data[i].id +
        '" opacity="' +
        data[i].data.BF_opacity +
        '" onclick="clickSvg_After(this);" class="ausente65 BF' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="11,0   11,0     11,19    11,20" fill="' +
        data[i].data.BF +
        '" stroke="' +
        data[i].data.BF +
        '" stroke-width="0.5" id="BF' +
        data[i].id +
        '" opacity="' +
        data[i].data.BF_opacity +
        '" onclick="clickSvg_After(this);" class="ausente65 BF' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="13,0   13,0     13,19    13,20" fill="' +
        data[i].data.BF +
        '" stroke="' +
        data[i].data.BF +
        '" stroke-width="0.5" id="BF' +
        data[i].id +
        '" opacity="' +
        data[i].data.BF_opacity +
        '" onclick="clickSvg_After(this);" class="ausente65 BF' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="15,0   15,0     15,19    15,20" fill="' +
        data[i].data.BF +
        '" stroke="' +
        data[i].data.BF +
        '" stroke-width="0.5" id="BF' +
        data[i].id +
        '" opacity="' +
        data[i].data.BF_opacity +
        '" onclick="clickSvg_After(this);" class="ausente65 BF' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="17,0   17,0     17,19    17,20" fill="' +
        data[i].data.BF +
        '" stroke="' +
        data[i].data.BF +
        '" stroke-width="0.5" id="BF' +
        data[i].id +
        '" opacity="' +
        data[i].data.BF_opacity +
        '" onclick="clickSvg_After(this);" class="ausente65 BF' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="0,0   0,0     0,20    0,20" fill="' +
        data[i].data.XA +
        '" stroke="' +
        data[i].data.XA +
        '" stroke-width="1.5" id="XA' +
        data[i].id +
        '" opacity="' +
        data[i].data.XA_opacity +
        '" onclick="clickSvg_After(this);" class="ausente45 XA' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="20,20   20,20     0,20    0,20" fill="' +
        data[i].data.XB +
        '" stroke="' +
        data[i].data.XB +
        '" stroke-width="1.5" id="XB' +
        data[i].id +
        '" opacity="' +
        data[i].data.XB_opacity +
        '" onclick="clickSvg_After(this);" class="ausente46 XB' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="20,0   20,0     20,20    20,20" fill="' +
        data[i].data.XC +
        '" stroke="' +
        data[i].data.XC +
        '" stroke-width="1.5" id="XC' +
        data[i].id +
        '" opacity="' +
        data[i].data.XC_opacity +
        '" onclick="clickSvg_After(this);" class="ausente47 XC' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="20,0   20,0     0,0    0,0" fill="' +
        data[i].data.XD +
        '" stroke="' +
        data[i].data.XD +
        '" stroke-width="1.5" id="XD' +
        data[i].id +
        '" opacity="' +
        data[i].data.XD_opacity +
        '" onclick="clickSvg_After(this);" class="ausente48 XD' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="15,10   15,10     20,20    20,20" fill="' +
        data[i].data.XM +
        '" stroke="' +
        data[i].data.XM +
        '" stroke-width="1.5" id="XM' +
        data[i].id +
        '" opacity="' +
        data[i].data.XM_opacity +
        '" onclick="clickSvg_After(this);" class="ausente66 XM' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="5,10   5,10     0,20    0,20" fill="' +
        data[i].data.XN +
        '" stroke="' +
        data[i].data.XN +
        '" stroke-width="1.5" id="XN' +
        data[i].id +
        '" opacity="' +
        data[i].data.XN_opacity +
        '" onclick="clickSvg_After(this);" class="ausente67 XN' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="15,10   15,10     20,0    20,0" fill="' +
        data[i].data.XO +
        '" stroke="' +
        data[i].data.XO +
        '" stroke-width="1.5" id="XO' +
        data[i].id +
        '" opacity="' +
        data[i].data.XO_opacity +
        '" onclick="clickSvg_After(this);" class="ausente68 XO' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="5,10   5,10     0,0    0,0" fill="' +
        data[i].data.XP +
        '" stroke="' +
        data[i].data.XP +
        '" stroke-width="1.5" id="XP' +
        data[i].id +
        '" opacity="' +
        data[i].data.XP_opacity +
        '" onclick="clickSvg_After(this);" class="ausente69 XP' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="5,10   5,10     15,10    15,10" fill="' +
        data[i].data.XQ +
        '" stroke="' +
        data[i].data.XQ +
        '" stroke-width="1.5" id="XQ' +
        data[i].id +
        '" opacity="' +
        data[i].data.XQ_opacity +
        '" onclick="clickSvg_After(this);" class="ausente70 XQ' +
        data[i].id +
        '"></polygon>' +
        '<text x="6" y="30" stroke="navy" fill="navy" stroke-width="0.1" style="font-size: 6pt;font-weight:normal">' +
        data[i].title +
        "</text>" +
        '<text x="6" y="37" stroke="navy" fill="navy" stroke-width="0.1" style="font-size: 6pt;font-weight:normal">' +
        data[i].title_2 +
        "</text>" +
        '<text x="6" y="43" stroke="navy" fill="navy" stroke-width="0.1" style="font-size: 6pt;font-weight:normal">' +
        data[i].title_3 +
        "</text>" +
        '<text x="6" y="49" stroke="navy" fill="navy" stroke-width="0.1" style="font-size: 6pt;font-weight:normal">' +
        data[i].title_4 +
        "</text>" +
        '<text id="keterangandental' +
        data[i].title +
        '" x="6" y="37" font-size="6pt">';
      "</text>" + "</g>";
    } else {
      var svg =
        ' <g id="' +
        data[i].id +
        '" class="' +
        data[i].id +
        '" transform="translate(' +
        data[i].transform1 +
        "," +
        data[i].transform2 +
        ')">' +
        '<polygon points="0,0   20,0    15,10    0,10" fill="' +
        data[i].data.F +
        '" stroke-width="0.5" opacity="1" id="F" class="ausente" onclick="clickSvg_After(this);"/></polygon>' +
        '<polygon points="20,0  20,0    20,20   15,10" fill="' +
        data[i].data.G +
        '" stroke-width="0.5" opacity="1" id="G" class="ausente" onclick="clickSvg_After(this);"/></polygon>' +
        '<polygon points="5,5   15,5    15,15   5,15" fill="' +
        data[i].data.C +
        '" stroke="navy" stroke-width="0.5" id="C" opacity="1" onclick="clickSvg_After(this);"></polygon>' +
        '<polygon points="0,0   20,0    15,5    5,5" fill="' +
        data[i].data.T +
        '" stroke="navy" stroke-width="0.5" id="T" opacity="1" onclick="clickSvg_After(this);"></polygon>' +
        '<polygon points="5,15  15,15   20,20   0,20" fill="' +
        data[i].data.B +
        '" stroke="navy" stroke-width="0.5" id="B" opacity="1" onclick="clickSvg_After(this);"></polygon>' +
        '<polygon points="15,5  20,0    20,20   15,15" fill="' +
        data[i].data.RD +
        '" stroke="navy" stroke-width="0.5" id="RD" opacity="1" onclick="clickSvg_After(this);"></polygon>' +
        '<polygon points="0,0   5,5     5,15    0,20" fill="' +
        data[i].data.L +
        '" stroke="navy" stroke-width="0.5" id="L" opacity="1" onclick="clickSvg_After(this);"></polygon>' +
        '<polygon points="0,2 2,2 20,20 18,20" fill="' +
        data[i].data.H +
        '" stroke="' +
        data[i].data.H +
        '" stroke-width="0.5" id="H' +
        data[i].id +
        '" opacity="' +
        data[i].data.H_opacity +
        '" onclick="clickSvg_After(this);" class="ausente H' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="17,2 20,2 2,20 2,17" fill="' +
        data[i].data.H +
        '" stroke="' +
        data[i].data.H +
        '" stroke-width="0.5" id="H' +
        data[i].id +
        '" opacity="' +
        data[i].data.H_opacity +
        '" onclick="clickSvg_After(this);" class="ausente H' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="5,5   15,5    15,15   5,15" fill="' +
        data[i].data.J +
        '" stroke="navy" stroke-width="0.5" id="J' +
        data[i].id +
        '" opacity="' +
        data[i].data.J_opacity +
        '" onclick="clickSvg_After(this);" class="ausente2 J' +
        data[i].id +
        '"></polygon>' +
        // '<polygon points="5,5   15,5    15,15   5,15" fill="'+data[i].data.K+'" stroke="navy" stroke-width="0.5" id="K'+data[i].id+'" opacity="1" onclick="clickSvg_After(this);" class="ausente3 K'+data[i].id+'"></polygon>'+
        '<polygon points="5,5   15,5    15,15   5,15" fill="' +
        data[i].data.N +
        '" stroke="navy" stroke-width="0.5" id="N' +
        data[i].id +
        '" opacity="' +
        data[i].data.N_opacity +
        '" onclick="clickSvg_After(this);" class="ausente5 N' +
        data[i].id +
        '"></polygon>' +
        // '<polygon points="5,5   15,5    15,15   5,15" fill="'+data[i].data.O+'" stroke="navy" stroke-width="2" id="O'+data[i].id+'" opacity="1" onclick="clickSvg_After(this);" class="ausente6"></polygon>'+
        '<polygon points="5,1   5,1     5,19    5,20" fill="' +
        data[i].data.O +
        '" stroke="' +
        data[i].data.O +
        '" stroke-width="2" id="O' +
        data[i].id +
        '" opacity="' +
        data[i].data.O_opacity +
        '" onclick="clickSvg_After(this);" class="ausente6 O' +
        data[i].id +
        '" ></polygon>' +
        '<polygon points="15,1   15,1     15,19    15,20" fill="' +
        data[i].data.O +
        '" stroke="' +
        data[i].data.O +
        '" stroke-width="2" id="O' +
        data[i].id +
        '" opacity="' +
        data[i].data.O_opacity +
        '" onclick="clickSvg_After(this);" class="ausente6 O' +
        data[i].id +
        '" ></polygon>' +
        '<polygon points="0,15   20,15     20,15    20,15" fill="' +
        data[i].data.O +
        '" stroke="' +
        data[i].data.O +
        '" stroke-width="2" id="O' +
        data[i].id +
        '" opacity="' +
        data[i].data.O_opacity +
        '" onclick="clickSvg_After(this);" class="ausente6 O' +
        data[i].id +
        '" ></polygon>' +
        '<polygon points="0,5   20,5     20,5    20,5" fill="' +
        data[i].data.O +
        '" stroke="' +
        data[i].data.O +
        '" stroke-width="2" id="O' +
        data[i].id +
        '" opacity="' +
        data[i].data.O_opacity +
        '" onclick="clickSvg_After(this);" class="ausente6 O' +
        data[i].id +
        '" ></polygon>' +
        '<polygon points="0,0   20,0     20,0    20,0" fill="' +
        data[i].data.P +
        '" stroke="' +
        data[i].data.P +
        '" stroke-width="2.5" id="P' +
        data[i].id +
        '" opacity="' +
        data[i].data.P_opacity +
        '" onclick="clickSvg_After(this);" class="ausente7 P' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="0,20   20,20     20,20    20,20" fill="' +
        data[i].data.P +
        '" stroke="' +
        data[i].data.P +
        '" stroke-width="2.5" id="P' +
        data[i].id +
        '" opacity="' +
        data[i].data.P_opacity +
        '" onclick="clickSvg_After(this);" class="ausente7 P' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="0,1   0,1     0,20    0,20" fill="' +
        data[i].data.P +
        '" stroke="' +
        data[i].data.P +
        '" stroke-width="2.5" id="P' +
        data[i].id +
        '" opacity="' +
        data[i].data.P_opacity +
        '" onclick="clickSvg_After(this);" class="ausente7 P' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="20,1   20,1     20,20    20,20" fill="' +
        data[i].data.P +
        '" stroke="' +
        data[i].data.P +
        '" stroke-width="2.5" id="P' +
        data[i].id +
        '" opacity="' +
        data[i].data.P_opacity +
        '" onclick="clickSvg_After(this);" class="ausente7 P' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="5,20   5,20     5,20    11,30" fill="' +
        data[i].data.Q +
        '" stroke="' +
        data[i].data.Q +
        '" stroke-width="2" id="Q' +
        data[i].id +
        '" opacity="' +
        data[i].data.Q_opacity +
        '" onclick="clickSvg_After(this);" class="ausente8 Q' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="15,20   15,20     15,20    11,30" fill="' +
        data[i].data.Q +
        '" stroke="' +
        data[i].data.Q +
        '" stroke-width="2" id="Q' +
        data[i].id +
        '" opacity="' +
        data[i].data.Q_opacity +
        '" onclick="clickSvg_After(this);" class="ausente8 Q' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="5,20   15,20    15,20   10,30" fill="' +
        data[i].data.R +
        '" stroke="navy" stroke-width="2" id="R' +
        data[i].id +
        '" opacity="' +
        data[i].data.R_opacity +
        '" onclick="clickSvg_After(this);" class="ausente9 R' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="5,2   5,2     5,2    11,20" fill="' +
        data[i].data.S +
        '" stroke="' +
        data[i].data.S +
        '" stroke-width="2" id="S' +
        data[i].id +
        '" opacity="' +
        data[i].data.S_opacity +
        '" onclick="clickSvg_After(this);" class="ausente10 S' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="15,2   15,2     15,2    11,20" fill="' +
        data[i].data.S +
        '" stroke="' +
        data[i].data.S +
        '" stroke-width="2" id="S' +
        data[i].id +
        '" opacity="' +
        data[i].data.S_opacity +
        '" onclick="clickSvg_After(this);" class="ausente10 S' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="0,2   2,2     2,2    2,2" fill="' +
        data[i].data.U +
        '" stroke="navy" stroke-width="0.2" id="U' +
        data[i].id +
        '" opacity="' +
        data[i].data.U +
        '" onclick="clickSvg_After(this);" class="ausente42 U' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="0,3   3,3     2,3    2,3" fill="' +
        data[i].data.U +
        '" stroke="navy" stroke-width="0.2" id="U' +
        data[i].id +
        '" opacity="' +
        data[i].data.U +
        '" onclick="clickSvg_After(this);" class="ausente42 U' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="0,4   4,4     2,4    2,4" fill="' +
        data[i].data.U +
        '" stroke="navy" stroke-width="0.2" id="U' +
        data[i].id +
        '" opacity="' +
        data[i].data.U +
        '" onclick="clickSvg_After(this);" class="ausente42 U' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="0,5   5,5     2,5    2,5" fill="' +
        data[i].data.U +
        '" stroke="navy" stroke-width="0.2" id="U' +
        data[i].id +
        '" opacity="' +
        data[i].data.U +
        '" onclick="clickSvg_After(this);" class="ausente42 U' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="0,6   5,6     2,6    2,6" fill="' +
        data[i].data.U +
        '" stroke="navy" stroke-width="0.2" id="U' +
        data[i].id +
        '" opacity="' +
        data[i].data.U +
        '" onclick="clickSvg_After(this);" class="ausente42 U' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="0,7   5,7     2,7    2,7" fill="' +
        data[i].data.U +
        '" stroke="navy" stroke-width="0.2" id="U' +
        data[i].id +
        '" opacity="' +
        data[i].data.U +
        '" onclick="clickSvg_After(this);" class="ausente42 U' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="0,8   5,8     2,8    2,8" fill="' +
        data[i].data.U +
        '" stroke="navy" stroke-width="0.2" id="U' +
        data[i].id +
        '" opacity="' +
        data[i].data.U +
        '" onclick="clickSvg_After(this);" class="ausente42 U' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="0,9   5,9     2,9    2,9" fill="' +
        data[i].data.U +
        '" stroke="navy" stroke-width="0.2" id="U' +
        data[i].id +
        '" opacity="' +
        data[i].data.U +
        '" onclick="clickSvg_After(this);" class="ausente42 U' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="0,10   5,10     2,10    2,10" fill="' +
        data[i].data.U +
        '" stroke="navy" stroke-width="0.2" id="U' +
        data[i].id +
        '" opacity="' +
        data[i].data.U +
        '" onclick="clickSvg_After(this);" class="ausente42 U' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="0,11   5,11     4,11    4,11" fill="' +
        data[i].data.U +
        '" stroke="navy" stroke-width="0.2" id="U' +
        data[i].id +
        '" opacity="' +
        data[i].data.U +
        '" onclick="clickSvg_After(this);" class="ausente42 U' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="0,12   5,12     2,12    2,12" fill="' +
        data[i].data.U +
        '" stroke="navy" stroke-width="0.2" id="U' +
        data[i].id +
        '" opacity="' +
        data[i].data.U +
        '" onclick="clickSvg_After(this);" class="ausente42 U' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="0,13   5,13     3,13    3,13" fill="' +
        data[i].data.U +
        '" stroke="navy" stroke-width="0.2" id="U' +
        data[i].id +
        '" opacity="' +
        data[i].data.U +
        '" onclick="clickSvg_After(this);" class="ausente42 U' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="0,14   5,14     2,14    2,14" fill="' +
        data[i].data.U +
        '" stroke="navy" stroke-width="0.2" id="U' +
        data[i].id +
        '" opacity="' +
        data[i].data.U +
        '" onclick="clickSvg_After(this);" class="ausente42 U' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="0,15   5,15     2,15    2,15" fill="' +
        data[i].data.U +
        '" stroke="navy" stroke-width="0.2" id="U' +
        data[i].id +
        '" opacity="' +
        data[i].data.U +
        '" onclick="clickSvg_After(this);" class="ausente42 U' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="0,16   4,16     2,16    2,16" fill="' +
        data[i].data.U +
        '" stroke="navy" stroke-width="0.2" id="U' +
        data[i].id +
        '" opacity="' +
        data[i].data.U +
        '" onclick="clickSvg_After(this);" class="ausente42 U' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="0,17   3,17     2,17    2,17" fill="' +
        data[i].data.U +
        '" stroke="navy" stroke-width="0.2" id="U' +
        data[i].id +
        '" opacity="' +
        data[i].data.U +
        '" onclick="clickSvg_After(this);" class="ausente42 U' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="0,18   2,18     2,18    2,18" fill="' +
        data[i].data.U +
        '" stroke="navy" stroke-width="0.2" id="U' +
        data[i].id +
        '" opacity="' +
        data[i].data.U +
        '" onclick="clickSvg_After(this);" class="ausente42 U' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="18,2   20,2     20,2    20,2" fill="' +
        data[i].data.V +
        '" stroke="navy" stroke-width="0.1" id="V' +
        data[i].id +
        '" opacity="' +
        data[i].data.V +
        '" onclick="clickSvg_After(this);" class="ausente43 V' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="17,3   20,3     20,3    20,3" fill="' +
        data[i].data.V +
        '" stroke="navy" stroke-width="0.1" id="V' +
        data[i].id +
        '" opacity="' +
        data[i].data.V +
        '" onclick="clickSvg_After(this);" class="ausente43 V' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="16,4   20,4     20,4    20,4" fill="' +
        data[i].data.V +
        '" stroke="navy" stroke-width="0.1" id="V' +
        data[i].id +
        '" opacity="' +
        data[i].data.V +
        '" onclick="clickSvg_After(this);" class="ausente43 V' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="15,5   20,5     20,5    20,5" fill="' +
        data[i].data.V +
        '" stroke="navy" stroke-width="0.1" id="V' +
        data[i].id +
        '" opacity="' +
        data[i].data.V +
        '" onclick="clickSvg_After(this);" class="ausente43 V' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="15,6   20,6     20,6    20,6" fill="' +
        data[i].data.V +
        '" stroke="navy" stroke-width="0.1" id="V' +
        data[i].id +
        '" opacity="' +
        data[i].data.V +
        '" onclick="clickSvg_After(this);" class="ausente43 V' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="15,7   20,7     20,7    20,7" fill="' +
        data[i].data.V +
        '" stroke="navy" stroke-width="0.1" id="V' +
        data[i].id +
        '" opacity="' +
        data[i].data.V +
        '" onclick="clickSvg_After(this);" class="ausente43 V' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="15,8   20,8     20,8    20,8" fill="' +
        data[i].data.V +
        '" stroke="navy" stroke-width="0.1" id="V' +
        data[i].id +
        '" opacity="' +
        data[i].data.V +
        '" onclick="clickSvg_After(this);" class="ausente43 V' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="15,9   20,9     20,9    20,9" fill="' +
        data[i].data.V +
        '" stroke="navy" stroke-width="0.1" id="V' +
        data[i].id +
        '" opacity="' +
        data[i].data.V +
        '" onclick="clickSvg_After(this);" class="ausente43 V' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="15,10   20,10     20,10    20,10" fill="' +
        data[i].data.V +
        '" stroke="navy" stroke-width="0.1" id="V' +
        data[i].id +
        '" opacity="' +
        data[i].data.V +
        '" onclick="clickSvg_After(this);" class="ausente43 V' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="15,11   20,11     20,11    20,11" fill="' +
        data[i].data.V +
        '" stroke="navy" stroke-width="0.1" id="V' +
        data[i].id +
        '" opacity="' +
        data[i].data.V +
        '" onclick="clickSvg_After(this);" class="ausente43 V' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="15,12   20,12     20,12    20,12" fill="' +
        data[i].data.V +
        '" stroke="navy" stroke-width="0.1" id="V' +
        data[i].id +
        '" opacity="' +
        data[i].data.V +
        '" onclick="clickSvg_After(this);" class="ausente43 V' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="15,13   20,13     20,13    20,13" fill="' +
        data[i].data.V +
        '" stroke="navy" stroke-width="0.1" id="V' +
        data[i].id +
        '" opacity="' +
        data[i].data.V +
        '" onclick="clickSvg_After(this);" class="ausente43 V' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="15,14   20,14     20,14    20,14" fill="' +
        data[i].data.V +
        '" stroke="navy" stroke-width="0.1" id="V' +
        data[i].id +
        '" opacity="' +
        data[i].data.V +
        '" onclick="clickSvg_After(this);" class="ausente43 V' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="15,15   20,15     20,15    20,15" fill="' +
        data[i].data.V +
        '" stroke="navy" stroke-width="0.1" id="V' +
        data[i].id +
        '" opacity="' +
        data[i].data.V +
        '" onclick="clickSvg_After(this);" class="ausente43 V' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="16,16   20,16     20,16    20,16" fill="' +
        data[i].data.V +
        '" stroke="navy" stroke-width="0.1" id="V' +
        data[i].id +
        '" opacity="' +
        data[i].data.V +
        '" onclick="clickSvg_After(this);" class="ausente43 V' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="17,17   20,17     20,17    20,17" fill="' +
        data[i].data.V +
        '" stroke="navy" stroke-width="0.1" id="V' +
        data[i].id +
        '" opacity="' +
        data[i].data.V +
        '" onclick="clickSvg_After(this);" class="ausente43 V' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="18,18   20,18     20,18    20,18" fill="' +
        data[i].data.V +
        '" stroke="navy" stroke-width="0.1" id="V' +
        data[i].id +
        '" opacity="' +
        data[i].data.V +
        '" onclick="clickSvg_After(this);" class="ausente43 V' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="2,18   2,18     2,20    2,20" fill="' +
        data[i].data.M +
        '" stroke="navy" stroke-width="0.1" id="M' +
        data[i].id +
        '" opacity="' +
        data[i].data.M +
        '" onclick="clickSvg_After(this);" class="ausente4 M' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="3,17   3,17     3,20    3,20" fill="' +
        data[i].data.M +
        '" stroke="navy" stroke-width="0.1" id="M' +
        data[i].id +
        '" opacity="' +
        data[i].data.M +
        '" onclick="clickSvg_After(this);" class="ausente4 M' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="4,16   4,16     4,20    4,20" fill="' +
        data[i].data.M +
        '" stroke="navy" stroke-width="0.1" id="M' +
        data[i].id +
        '" opacity="' +
        data[i].data.M +
        '" onclick="clickSvg_After(this);" class="ausente4 M' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="5,15   5,15     5,15    5,20" fill="' +
        data[i].data.M +
        '" stroke="navy" stroke-width="0.1" id="M' +
        data[i].id +
        '" opacity="' +
        data[i].data.M +
        '" onclick="clickSvg_After(this);" class="ausente4 M' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="6,15   6,15     6,15    6,20" fill="' +
        data[i].data.M +
        '" stroke="navy" stroke-width="0.1" id="M' +
        data[i].id +
        '" opacity="' +
        data[i].data.M +
        '" onclick="clickSvg_After(this);" class="ausente4 M' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="7,15   7,15     7,15    7,20" fill="' +
        data[i].data.M +
        '" stroke="navy" stroke-width="0.1" id="M' +
        data[i].id +
        '" opacity="' +
        data[i].data.M +
        '" onclick="clickSvg_After(this);" class="ausente4 M' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="8,15   8,15     8,15    8,20" fill="' +
        data[i].data.M +
        '" stroke="navy" stroke-width="0.1" id="M' +
        data[i].id +
        '" opacity="' +
        data[i].data.M +
        '" onclick="clickSvg_After(this);" class="ausente4 M' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="9,15   9,15     9,15    9,20" fill="' +
        data[i].data.M +
        '" stroke="navy" stroke-width="0.1" id="M' +
        data[i].id +
        '" opacity="' +
        data[i].data.M +
        '" onclick="clickSvg_After(this);" class="ausente4 M' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="10,15   10,15     10,15    10,20" fill="' +
        data[i].data.M +
        '" stroke="navy" stroke-width="0.1" id="M' +
        data[i].id +
        '" opacity="' +
        data[i].data.M +
        '" onclick="clickSvg_After(this);" class="ausente4 M' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="11,15   11,15     11,15    11,20" fill="' +
        data[i].data.M +
        '" stroke="navy" stroke-width="0.1" id="M' +
        data[i].id +
        '" opacity="' +
        data[i].data.M +
        '" onclick="clickSvg_After(this);" class="ausente4 M' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="12,15   12,15     12,15    12,20" fill="' +
        data[i].data.M +
        '" stroke="navy" stroke-width="0.1" id="M' +
        data[i].id +
        '" opacity="' +
        data[i].data.M +
        '" onclick="clickSvg_After(this);" class="ausente4 M' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="13,15  13,15     13,15    13,20" fill="' +
        data[i].data.M +
        '"  stroke="navy" stroke-width="0.1" id="M' +
        data[i].id +
        '" opacity="' +
        data[i].data.M +
        '" onclick="clickSvg_After(this);" class="ausente4 M' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="14,15   14,15     14,15    14,20" fill="' +
        data[i].data.M +
        '" stroke="navy" stroke-width="0.1" id="M' +
        data[i].id +
        '" opacity="' +
        data[i].data.M +
        '" onclick="clickSvg_After(this);" class="ausente4 M' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="15,15   15,15     15,15    15,20" fill="' +
        data[i].data.M +
        '" stroke="navy" stroke-width="0.1" id="M' +
        data[i].id +
        '" opacity="' +
        data[i].data.M +
        '" onclick="clickSvg_After(this);" class="ausente4 M' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="16,16   16,16     16,20    16,20" fill="' +
        data[i].data.M +
        '" stroke="navy" stroke-width="0.1" id="M' +
        data[i].id +
        '" opacity="' +
        data[i].data.M +
        '" onclick="clickSvg_After(this);" class="ausente4 M' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="17,17   17,17     17,20    17,20" fill="' +
        data[i].data.M +
        '" stroke="navy" stroke-width="0.1" id="M' +
        data[i].id +
        '" opacity="' +
        data[i].data.M +
        '" onclick="clickSvg_After(this);" class="ausente4 M' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="18,18   18,18     18,20    18,20" fill="' +
        data[i].data.M +
        '" stroke="navy" stroke-width="0.1" id="M' +
        data[i].id +
        '" opacity="' +
        data[i].data.M +
        '" onclick="clickSvg_After(this);" class="ausente4 M' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="1,1   1,1     1,0    1,0" fill="' +
        data[i].data.TV +
        '" stroke="navy" stroke-width="0.1" id="TV' +
        data[i].id +
        '" opacity="' +
        data[i].data.TV +
        '" onclick="clickSvg_After(this);" class="ausente41 TV' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="2,2   2,2     2,0    2,0" fill="' +
        data[i].data.TV +
        '" stroke="navy" stroke-width="0.1" id="TV' +
        data[i].id +
        '" opacity="' +
        data[i].data.TV +
        '" onclick="clickSvg_After(this);" class="ausente41 TV' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="3,3   3,3     3,0    3,0" fill="' +
        data[i].data.TV +
        '" stroke="navy" stroke-width="0.1" id="TV' +
        data[i].id +
        '" opacity="' +
        data[i].data.TV +
        '" onclick="clickSvg_After(this);" class="ausente41 TV' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="4,4   4,4     4,0    4,0" fill="' +
        data[i].data.TV +
        '" stroke="navy" stroke-width="0.1" id="TV' +
        data[i].id +
        '" opacity="' +
        data[i].data.TV +
        '" onclick="clickSvg_After(this);" class="ausente41 TV' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="5,5   5,5     5,0    5,0" fill="' +
        data[i].data.TV +
        '" stroke="navy" stroke-width="0.1" id="TV' +
        data[i].id +
        '" opacity="' +
        data[i].data.TV +
        '" onclick="clickSvg_After(this);" class="ausente41 TV' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="6,5   6,5     6,0    6,0" fill="' +
        data[i].data.TV +
        '" stroke="navy" stroke-width="0.1" id="TV' +
        data[i].id +
        '" opacity="' +
        data[i].data.TV +
        '" onclick="clickSvg_After(this);" class="ausente41 TV' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="7,5   7,5     7,0    7,0" fill="' +
        data[i].data.TV +
        '" stroke="navy" stroke-width="0.1" id="TV' +
        data[i].id +
        '" opacity="' +
        data[i].data.TV +
        '" onclick="clickSvg_After(this);" class="ausente41 TV' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="8,5   8,5     8,0    8,0" fill="' +
        data[i].data.TV +
        '" stroke="navy" stroke-width="0.1" id="TV' +
        data[i].id +
        '" opacity="' +
        data[i].data.TV +
        '" onclick="clickSvg_After(this);" class="ausente41 TV' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="9,5   9,5     9,0    9,0" fill="' +
        data[i].data.TV +
        '" stroke="navy" stroke-width="0.1" id="TV' +
        data[i].id +
        '" opacity="' +
        data[i].data.TV +
        '" onclick="clickSvg_After(this);" class="ausente41 TV' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="10,5   10,5     10,0    10,0" fill="' +
        data[i].data.TV +
        '" stroke="navy" stroke-width="0.1" id="TV' +
        data[i].id +
        '" opacity="' +
        data[i].data.TV +
        '" onclick="clickSvg_After(this);" class="ausente41 TV' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="11,5   11,5     11,0    11,0" fill="' +
        data[i].data.TV +
        '" stroke="navy" stroke-width="0.1" id="TV' +
        data[i].id +
        '" opacity="' +
        data[i].data.TV +
        '" onclick="clickSvg_After(this);" class="ausente41 TV' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="12,5   12,5     12,0    12,0" fill="' +
        data[i].data.TV +
        '" stroke="navy" stroke-width="0.1" id="TV' +
        data[i].id +
        '" opacity="' +
        data[i].data.TV +
        '" onclick="clickSvg_After(this);" class="ausente41 TV' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="13,5   13,5     13,0    13,0" fill="' +
        data[i].data.TV +
        '" stroke="navy" stroke-width="0.1" id="TV' +
        data[i].id +
        '" opacity="' +
        data[i].data.TV +
        '" onclick="clickSvg_After(this);" class="ausente41 TV' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="14,5   14,5     14,0    14,0" fill="' +
        data[i].data.TV +
        '" stroke="navy" stroke-width="0.1" id="TV' +
        data[i].id +
        '" opacity="' +
        data[i].data.TV +
        '" onclick="clickSvg_After(this);" class="ausente41 TV' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="15,5   15,5     15,0    15,0" fill="' +
        data[i].data.TV +
        '" stroke="navy" stroke-width="0.1" id="TV' +
        data[i].id +
        '" opacity="' +
        data[i].data.TV +
        '" onclick="clickSvg_After(this);" class="ausente41 TV' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="16,4   16,4     16,0    16,0" fill="' +
        data[i].data.TV +
        '" stroke="navy" stroke-width="0.1" id="TV' +
        data[i].id +
        '" opacity="' +
        data[i].data.TV +
        '" onclick="clickSvg_After(this);" class="ausente41 TV' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="17,3   17,3     17,0    17,0" fill="' +
        data[i].data.TV +
        '" stroke="navy" stroke-width="0.1" id="TV' +
        data[i].id +
        '" opacity="' +
        data[i].data.TV +
        '" onclick="clickSvg_After(this);" class="ausente41 TV' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="18,2   18,2     18,0    18,0" fill="' +
        data[i].data.TV +
        '" stroke="navy" stroke-width="0.1" id="TV' +
        data[i].id +
        '" opacity="' +
        data[i].data.TV +
        '" onclick="clickSvg_After(this);" class="ausente41 TV' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="19,1   19,1     19,0    19,0" fill="' +
        data[i].data.TV +
        '" stroke="navy" stroke-width="0.1" id="TV' +
        data[i].id +
        '" opacity="' +
        data[i].data.TV +
        '" onclick="clickSvg_After(this);" class="ausente41 TV' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="5,5   5,5     5,0    5,0" fill="' +
        data[i].data.W +
        '" stroke="navy" stroke-width="0.5" id="W' +
        data[i].id +
        '" opacity="' +
        data[i].data.W_opacity +
        '" onclick="clickSvg_After(this);" class="ausente44 W' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="7,5   7,5     7,0    7,0" fill="' +
        data[i].data.W +
        '" stroke="navy" stroke-width="0.5" id="W' +
        data[i].id +
        '" opacity="' +
        data[i].data.W_opacity +
        '" onclick="clickSvg_After(this);" class="ausente44 W' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="9,5   9,5     9,0    9,0" fill="' +
        data[i].data.W +
        '" stroke="navy" stroke-width="0.5" id="W' +
        data[i].id +
        '" opacity="' +
        data[i].data.W_opacity +
        '" onclick="clickSvg_After(this);" class="ausente44 W' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="11,5   11,5     11,0    11,0" fill="' +
        data[i].data.W +
        '" stroke="navy" stroke-width="0.5" id="W' +
        data[i].id +
        '" opacity="' +
        data[i].data.W_opacity +
        '" onclick="clickSvg_After(this);" class="ausente44 W' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="13,5   13,5     13,0    13,0" fill="' +
        data[i].data.W +
        '" stroke="navy" stroke-width="0.5" id="W' +
        data[i].id +
        '" opacity="' +
        data[i].data.W_opacity +
        '" onclick="clickSvg_After(this);" class="ausente44 W' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="15,5   15,5     15,0    15,0" fill="' +
        data[i].data.W +
        '" stroke="navy" stroke-width="0.5" id="W' +
        data[i].id +
        '" opacity="' +
        data[i].data.W_opacity +
        '" onclick="clickSvg_After(this);" class="ausente44 W' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="0,0   0,0     0,20    0,20" fill="' +
        data[i].data.XA +
        '" stroke="' +
        data[i].data.XA +
        '" stroke-width="1.5" id="XA' +
        data[i].id +
        '" opacity="' +
        data[i].data.XA_opacity +
        '" onclick="clickSvg_After(this);" class="ausente45 XA' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="20,20   20,20     0,20    0,20" fill="' +
        data[i].data.XB +
        '" stroke="' +
        data[i].data.XB +
        '" stroke-width="1.5" id="XB' +
        data[i].id +
        '" opacity="' +
        data[i].data.XB_opacity +
        '" onclick="clickSvg_After(this);" class="ausente46 XB' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="20,0   20,0     20,20    20,20" fill="' +
        data[i].data.XC +
        '" stroke="' +
        data[i].data.XC +
        '" stroke-width="1.5" id="XC' +
        data[i].id +
        '" opacity="' +
        data[i].data.XC_opacity +
        '" onclick="clickSvg_After(this);" class="ausente47 XC' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="20,0   20,0     0,0    0,0" fill="' +
        data[i].data.XD +
        '" stroke="' +
        data[i].data.XD +
        '" stroke-width="1.5" id="XD' +
        data[i].id +
        '" opacity="' +
        data[i].data.XD_opacity +
        '" onclick="clickSvg_After(this);" class="ausente48 XD' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="5,15   5,15     0,20    0,20" fill="' +
        data[i].data.XE +
        '" stroke="' +
        data[i].data.XE +
        '" stroke-width="1.5" id="XE' +
        data[i].id +
        '" opacity="' +
        data[i].data.XE_opacity +
        '" onclick="clickSvg_After(this);" class="ausente49 XE' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="15,15   15,15     20,20    20,20" fill="' +
        data[i].data.XF +
        '" stroke="' +
        data[i].data.XF +
        '" stroke-width="1.5" id="XF' +
        data[i].id +
        '" opacity="' +
        data[i].data.XF_opacity +
        '" onclick="clickSvg_After(this);" class="ausente50 XF' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="5,5   5,5     0,0    0,0" fill="' +
        data[i].data.XG +
        '" stroke="' +
        data[i].data.XG +
        '" stroke-width="1.5" id="XG' +
        data[i].id +
        '" opacity="' +
        data[i].data.XG_opacity +
        '" onclick="clickSvg_After(this);" class="ausente51 XG' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="15,5   15,5     20,0    20,0" fill="' +
        data[i].data.XH +
        '" stroke="' +
        data[i].data.XH +
        '" stroke-width="1.5" id="XH' +
        data[i].id +
        '" opacity="' +
        data[i].data.XH_opacity +
        '" onclick="clickSvg_After(this);" class="ausente52 XH' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="15,15   15,15     5,15    5,15" fill="' +
        data[i].data.XI +
        '" stroke="' +
        data[i].data.XI +
        '" stroke-width="1.5" id="XI' +
        data[i].id +
        '" opacity="' +
        data[i].data.XI_opacity +
        '" onclick="clickSvg_After(this);" class="ausente53 XI' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="15,15   15,15     15,5    15,5" fill="' +
        data[i].data.XJ +
        '" stroke="' +
        data[i].data.XJ +
        '" stroke-width="1.5" id="XJ' +
        data[i].id +
        '" opacity="' +
        data[i].data.XJ_opacity +
        '" onclick="clickSvg_After(this);" class="ausente54 XJ' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="5,5   5,5     5,15    5,15" fill="' +
        data[i].data.XK +
        '" stroke="' +
        data[i].data.XK +
        '" stroke-width="1.5" id="XK' +
        data[i].id +
        '" opacity="' +
        data[i].data.XK_opacity +
        '" onclick="clickSvg_After(this);" class="ausente55 XK' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="5,5   5,5     15,5    15,5" fill="' +
        data[i].data.XL +
        '" stroke="' +
        data[i].data.XL +
        '" stroke-width="1.5" id="XL' +
        data[i].id +
        '" opacity="' +
        data[i].data.XL_opacity +
        '" onclick="clickSvg_After(this);" class="ausente56 XL' +
        data[i].id +
        '"></polygon>' +
        // '<polygon points="1,0   1,0     1,19    1,20" fill="'+data[i].data.AB+'" stroke="navy" stroke-width="0.5" id="AB'+data[i].id+'" opacity="1" onclick="clickSvg_After(this);" class="ausente59 AB'+data[i].id+'"></polygon>'+
        '<polygon points="3,0   3,0     3,19    3,20" fill="' +
        data[i].data.AB +
        '" stroke="' +
        data[i].data.AB +
        '" stroke-width="0.5" id="AB' +
        data[i].id +
        '" opacity="' +
        data[i].data.AB_opacity +
        '" onclick="clickSvg_After(this);" class="ausente59 AB' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="5,0   5,0     5,19    5,20" fill="' +
        data[i].data.AB +
        '" stroke="' +
        data[i].data.AB +
        '" stroke-width="0.5" id="AB' +
        data[i].id +
        '" opacity="' +
        data[i].data.AB_opacity +
        '" onclick="clickSvg_After(this);" class="ausente59 AB' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="7,0   7,10     7,19    7,20" fill="' +
        data[i].data.AB +
        '" stroke="' +
        data[i].data.AB +
        '" stroke-width="0.5" id="AB' +
        data[i].id +
        '" opacity="' +
        data[i].data.AB_opacity +
        '" onclick="clickSvg_After(this);" class="ausente59 AB' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="9,0   9,0     9,19    9,20" fill="' +
        data[i].data.AB +
        '" stroke="' +
        data[i].data.AB +
        '" stroke-width="0.5" id="AB' +
        data[i].id +
        '" opacity="' +
        data[i].data.AB_opacity +
        '" onclick="clickSvg_After(this);" class="ausente59 AB' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="11,0   11,0     11,19    11,20" fill="' +
        data[i].data.AB +
        '" stroke="' +
        data[i].data.AB +
        '" stroke-width="0.5" id="AB' +
        data[i].id +
        '" opacity="' +
        data[i].data.AB_opacity +
        '" onclick="clickSvg_After(this);" class="ausente59 AB' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="13,0   13,0     13,19    13,20" fill="' +
        data[i].data.AB +
        '" stroke="' +
        data[i].data.AB +
        '" stroke-width="0.5" id="AB' +
        data[i].id +
        '" opacity="' +
        data[i].data.AB_opacity +
        '" onclick="clickSvg_After(this);" class="ausente59 AB' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="15,0   15,0     15,19    15,20" fill="' +
        data[i].data.AB +
        '" stroke="' +
        data[i].data.AB +
        '" stroke-width="0.5" id="AB' +
        data[i].id +
        '" opacity="' +
        data[i].data.AB_opacity +
        '" onclick="clickSvg_After(this);" class="ausente59 AB' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="17,0   17,0     17,19    17,20" fill="' +
        data[i].data.AB +
        '" stroke="' +
        data[i].data.AB +
        '" stroke-width="0.5" id="AB' +
        data[i].id +
        '" opacity="' +
        data[i].data.AB_opacity +
        '" onclick="clickSvg_After(this);" class="ausente59 AB' +
        data[i].id +
        '"></polygon>' +
        // '<polygon points="5,20   5,20     5,20    11,30" fill="'+data[i].data.BA+'" stroke="navy" stroke-width="2" id="BA'+data[i].id+'" opacity="1" onclick="clickSvg_After(this);" class="ausente60 BA'+data[i].id+'"></polygon>'+
        '<polygon points="25,35   25,35     0,35    0,35" fill="' +
        data[i].data.BA +
        '" stroke="' +
        data[i].data.BA +
        '" stroke-width="2" id="BA' +
        data[i].id +
        '" opacity="' +
        data[i].data.BA_opacity +
        '" onclick="clickSvg_After(this);" class="ausente60 BA' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="25,35   25,35     0,35    0,35" fill="' +
        data[i].data.BB +
        '" stroke="' +
        data[i].data.BB +
        '" stroke-width="2" id="BB' +
        data[i].id +
        '" opacity="' +
        data[i].data.BB_opacity +
        '" onclick="clickSvg_After(this);" class="ausente61 BB' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="25,35   25,35     0,35    0,35" fill="' +
        data[i].data.BC +
        '" stroke="' +
        data[i].data.BC +
        '" stroke-width="2" id="BC' +
        data[i].id +
        '" opacity="' +
        data[i].opacity +
        '" onclick="clickSvg_After(this);" class="ausente62 BC' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="0,30   0,35     0,20    0,20" fill="' +
        data[i].data.BD +
        '" stroke="' +
        data[i].data.BD +
        '" stroke-width="2" id="BD' +
        data[i].id +
        '" opacity="' +
        data[i].opacity +
        '" onclick="clickSvg_After(this);" class="ausente63 BD' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="20,35   20,35     20,20    20,20" fill="' +
        data[i].data.BE +
        '" stroke="' +
        data[i].data.BE +
        '" stroke-width="2" id="BE' +
        data[i].id +
        '" opacity="' +
        data[i].opacity +
        '" onclick="clickSvg_After(this);" class="ausente64 BE' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="3,0   3,0     3,19    3,20" fill="' +
        data[i].data.BF +
        '" stroke="' +
        data[i].data.BF +
        '" stroke-width="0.5" id="BF' +
        data[i].id +
        '" opacity="' +
        data[i].data.BF_opacity +
        '" onclick="clickSvg_After(this);" class="ausente65 BF' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="5,0   5,0     5,19    5,20" fill="' +
        data[i].data.BF +
        '" stroke="' +
        data[i].data.BF +
        '" stroke-width="0.5" id="BF' +
        data[i].id +
        '" opacity="' +
        data[i].data.BF_opacity +
        '" onclick="clickSvg_After(this);" class="ausente65 BF' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="7,0   7,10     7,19    7,20" fill="' +
        data[i].data.BF +
        '" stroke="' +
        data[i].data.BF +
        '" stroke-width="0.5" id="BF' +
        data[i].id +
        '" opacity="' +
        data[i].data.BF_opacity +
        '" onclick="clickSvg_After(this);" class="ausente65 BF' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="9,0   9,0     9,19    9,20" fill="' +
        data[i].data.BF +
        '" stroke="' +
        data[i].data.BF +
        '" stroke-width="0.5" id="BF' +
        data[i].id +
        '" opacity="' +
        data[i].data.BF_opacity +
        '" onclick="clickSvg_After(this);" class="ausente65 BF' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="11,0   11,0     11,19    11,20" fill="' +
        data[i].data.BF +
        '" stroke="' +
        data[i].data.BF +
        '" stroke-width="0.5" id="BF' +
        data[i].id +
        '" opacity="' +
        data[i].data.BF_opacity +
        '" onclick="clickSvg_After(this);" class="ausente65 BF' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="13,0   13,0     13,19    13,20" fill="' +
        data[i].data.BF +
        '" stroke="' +
        data[i].data.BF +
        '" stroke-width="0.5" id="BF' +
        data[i].id +
        '" opacity="' +
        data[i].data.BF_opacity +
        '" onclick="clickSvg_After(this);" class="ausente65 BF' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="15,0   15,0     15,19    15,20" fill="' +
        data[i].data.BF +
        '" stroke="' +
        data[i].data.BF +
        '" stroke-width="0.5" id="BF' +
        data[i].id +
        '" opacity="' +
        data[i].data.BF_opacity +
        '" onclick="clickSvg_After(this);" class="ausente65 BF' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="17,0   17,0     17,19    17,20" fill="' +
        data[i].data.BF +
        '" stroke="' +
        data[i].data.BF +
        '" stroke-width="0.5" id="BF' +
        data[i].id +
        '" opacity="' +
        data[i].data.BF_opacity +
        '" onclick="clickSvg_After(this);" class="ausente65 BF' +
        data[i].id +
        '"></polygon>' +
        '<text x="6" y="30" stroke="navy" fill="navy" stroke-width="0.1" style="font-size: 6pt;font-weight:normal">' +
        data[i].title +
        "</text>" +
        '<text x="6" y="37" stroke="navy" fill="navy" stroke-width="0.1" style="font-size: 6pt;font-weight:normal">' +
        data[i].title_2 +
        "</text>" +
        '<text x="6" y="43" stroke="navy" fill="navy" stroke-width="0.1" style="font-size: 6pt;font-weight:normal">' +
        data[i].title_3 +
        "</text>" +
        '<text x="6" y="49" stroke="navy" fill="navy" stroke-width="0.1" style="font-size: 6pt;font-weight:normal">' +
        data[i].title_4 +
        "</text>" +
        '<text id="keterangandental' +
        data[i].title +
        '" x="6" y="37" font-size="6pt">';
      "</text>" + "</g>";
    }

    var parser = new DOMParser();
    var doc = parser.parseFromString(svg, "image/svg+xml");
    // var baru = document.importNode(svg,true);
    document.getElementById("odontograma2").appendChild(parseSVG(svg));
    // console.log("svg: " , doc);
    // $("#odontograma").append(svg);
  }
};

function clickSvg_After(x) {
  var control = $("#controls_after").children().find(".active").attr("id");
  var control2 = $("#controls2_after").children().find(".active").attr("id");
  var control3 = $("#controls3_after").children().find(".active").attr("id");

  var idSvg = $(x).parent().attr("id");

  var idPolygon = $(x).attr("id");

  var Svgout = $(x).parent();

  console.log("control", control2);

  switch (control) {
    case "kariesSuperfisia2_after":
      console.log("x");
      $(x)
        .parent()
        .find(".ausente2")
        .each(function () {
          var idPolygon2 = $(this).attr("class");
          var idSvg2 = $(this).attr("id");
          console.log("this", this);
          $("." + idSvg2).attr({ fill: "Black", opacity: "1" });
          //     var e = document.querySelector("."+idSvg2+"");
          //   //  $(x).attr("opacity", "1");
          //    // if (e) {
          //    // console.log('isi');
          //         //e.removeAttribute('class');
          //         e.setAttribute("fill","Black");
          //         e.setAttribute("opacity","1");
          // }
          // console.log('all', allDental.length);
          for (var i = 0; i < allDentalAfter.length; i++) {
            if (allDentalAfter[i].id === idSvg) {
              allDentalAfter[i].data.J = "black";
              allDentalAfter[i].data.J_opacity = "1";
            }
          }

          var classe = document.querySelector("#kariesSuperfisia2_after");
          if (classe) {
            classe.removeAttribute("class", "active");
            classe.setAttribute("class", "btn list-group-item");
          }
        });
      break;
    case "kariesSuperfisia11_after":
      $(x)
        .parent()
        .find(".ausente")
        .each(function () {
          console.log("hallo");

          var idPolygon2 = $(this).attr("class");
          var idSvg2 = $(this).attr("id");
          $("." + idSvg2).attr({
            fill: "Black",
            opacity: "1",
            stroke: "Black",
          });
          // var e = document.querySelector("."+idSvg2+"");
          // if (e) {
          //     e.removeAttribute('class');
          //     e.setAttribute("fill","black");
          //     e.setAttribute("stroke","black");
          //     e.setAttribute("opacity","1");
          // }
          for (var i = 0; i < allDentalAfter.length; i++) {
            if (allDentalAfter[i].id === idSvg) {
              allDentalAfter[i].data.H = "black";
              allDentalAfter[i].data.H_opacity = "1";
            }
          }

          var classe = document.querySelector("#kariesSuperfisia11_after");
          if (classe) {
            classe.removeAttribute("class", "active");
            classe.setAttribute("class", "btn list-group-item");
          }
        });

      break;
    case "kariesSuperfisia4_after":
      $(x)
        .parent()
        .find(".ausente5")
        .each(function () {
          var idPolygon2 = $(this).attr("class");
          var idSvg2 = $(this).attr("id");
          $("." + idSvg2).attr({ fill: "tomato", opacity: "1" });
          // var e = document.querySelector("."+idSvg2+"");
          // if (e) {
          //     e.removeAttribute('class');
          //     e.setAttribute("fill","tomato");
          //     e.setAttribute("opacity","1");
          // }

          for (var i = 0; i < allDentalAfter.length; i++) {
            if (allDentalAfter[i].id === idSvg) {
              allDentalAfter[i].data.N = "tomato";
              allDentalAfter[i].data.N_opacity = "1";
            }
          }

          var classe = document.querySelector("#kariesSuperfisia4_after");
          if (classe) {
            classe.removeAttribute("class", "active");
            classe.setAttribute("class", "btn list-group-item");
          }
        });
      break;
    case "kariesSuperfisia3_after":
      console.log("idPolygon", idPolygon);
      $(x)
        .parent()
        .find(".ausente4")
        .each(function () {
          var idPolygon2 = $(this).attr("class");
          var idSvg2 = $(this).attr("id");
          $("." + idSvg2).attr({ opacity: "1" });
          // console.log('hallo',idSvg2);
          // var e = document.querySelector("."+idSvg2+"");
          // console.log('e',e);
          // if (e) {
          //     e.removeAttribute('class');
          //     e.setAttribute("opacity","1");
          // }

          for (var i = 0; i < allDentalAfter.length; i++) {
            if (allDentalAfter[i].id === idSvg) {
              allDentalAfter[i].data.M = "1";
            }
          }
          var classe = document.querySelector("#kariesSuperfisia3_after");
          if (classe) {
            classe.removeAttribute("class", "active");
            classe.setAttribute("class", "btn list-group-item");
          }
        });

      break;
    case "kariesSuperfisia12_after":
      $(x)
        .parent()
        .find(".ausente41")
        .each(function () {
          var idPolygon2 = $(this).attr("class");
          var idSvg2 = $(this).attr("id");
          $("." + idSvg2).attr({ opacity: "1" });
          // var e = document.querySelector("."+idSvg2+"");
          // if (e) {
          //     e.removeAttribute('class');
          //     e.setAttribute("opacity","1");

          // }

          for (var i = 0; i < allDentalAfter.length; i++) {
            if (allDentalAfter[i].id === idSvg) {
              allDentalAfter[i].data.TV = "1";
            }
          }

          var classe = document.querySelector("#kariesSuperfisia12_after");
          if (classe) {
            classe.removeAttribute("class", "active");
            classe.setAttribute("class", "btn list-group-item");
          }
        });
      break;
    case "kariesSuperfisia13_after":
      $(x)
        .parent()
        .find(".ausente42")
        .each(function () {
          var idPolygon2 = $(this).attr("class");
          var idSvg2 = $(this).attr("id");
          $("." + idSvg2).attr({ opacity: "1" });
          // var e = document.querySelector("."+idSvg2+"");
          // if (e) {
          //     e.removeAttribute('class');
          //     e.setAttribute("opacity","1");

          // }

          for (var i = 0; i < allDentalAfter.length; i++) {
            if (allDentalAfter[i].id === idSvg) {
              allDentalAfter[i].data.U = "1";
            }
          }

          var classe = document.querySelector("#kariesSuperfisia13_after");
          if (classe) {
            classe.removeAttribute("class", "active");
            classe.setAttribute("class", "btn list-group-item");
          }
        });
      break;
    case "kariesSuperfisia14_after":
      $(x)
        .parent()
        .find(".ausente43")
        .each(function () {
          var idPolygon2 = $(this).attr("class");
          var idSvg2 = $(this).attr("id");
          $("." + idSvg2).attr({ opacity: "1" });
          // var e = document.querySelector("."+idSvg2+"");
          // if (e) {
          //     e.removeAttribute('class');
          //     e.setAttribute("opacity","1");

          // }

          for (var i = 0; i < allDentalAfter.length; i++) {
            if (allDentalAfter[i].id === idSvg) {
              allDentalAfter[i].data.V = "1";
            }
          }

          var classe = document.querySelector("#kariesSuperfisia14_after");
          if (classe) {
            classe.removeAttribute("class", "active");
            classe.setAttribute("class", "btn list-group-item");
          }
        });
      break;
    case "kariesSuperfisia5_after":
      //  if()
      console.log("idPolygon", idPolygon);
      console.log("idSvg", idSvg);
      if (idPolygon == "XA" + idSvg) {
        $(x)
          .parent()
          .find(".ausente45")
          .each(function () {
            console.log("hallo");
            var idPolygon2 = $(this).attr("class");
            var idSvg2 = $(this).attr("id");
            $("." + idSvg2).attr({ stroke: "Black", opacity: "1" });
            // var e = document.querySelector("."+idSvg2+"");
            // if (e) {
            //     e.removeAttribute('class');
            //     e.setAttribute("stroke","black");
            //     e.setAttribute("opacity","1");
            // }
            for (var i = 0; i < allDentalAfter.length; i++) {
              if (allDentalAfter[i].id === idSvg) {
                allDentalAfter[i].data.XA = "black";
                allDentalAfter[i].data.XA_opacity = "1";
              }
            }

            var classe = document.querySelector("#kariesSuperfisia5_after");
            if (classe) {
              classe.removeAttribute("class", "active");
              classe.setAttribute("class", "btn list-group-item");
            }
          });
      } else if (idPolygon == "XB" + idSvg) {
        $(x)
          .parent()
          .find(".ausente46")
          .each(function () {
            console.log("hallo");
            var idPolygon2 = $(this).attr("class");
            var idSvg2 = $(this).attr("id");
            $("." + idSvg2).attr({ stroke: "Black", opacity: "1" });
            // console.log('hallo',idSvg2);
            // var e = document.querySelector("."+idSvg2+"");
            // if (e) {
            //     e.removeAttribute('class');
            //     e.setAttribute("stroke","black");
            //     e.setAttribute("opacity","1");
            // }
            for (var i = 0; i < allDentalAfter.length; i++) {
              if (allDentalAfter[i].id === idSvg) {
                allDentalAfter[i].data.XB = "black";
                allDentalAfter[i].data.XB_opacity = "1";
              }
            }
            var classe = document.querySelector("#kariesSuperfisia5_after");
            if (classe) {
              classe.removeAttribute("class", "active");
              classe.setAttribute("class", "btn list-group-item");
            }
          });
      } else if (idPolygon == "XC" + idSvg) {
        $(x)
          .parent()
          .find(".ausente47")
          .each(function () {
            console.log("hallo");
            var idPolygon2 = $(this).attr("class");
            var idSvg2 = $(this).attr("id");
            $("." + idSvg2).attr({ stroke: "Black", opacity: "1" });
            // console.log('hallo',idSvg2);
            // var e = document.querySelector("."+idSvg2+"");
            // if (e) {
            //     e.removeAttribute('class');
            //     e.setAttribute("stroke","black");
            //     e.setAttribute("opacity","1");
            // }
            for (var i = 0; i < allDentalAfter.length; i++) {
              if (allDentalAfter[i].id === idSvg) {
                allDentalAfter[i].data.XC = "black";
                allDentalAfter[i].data.XC_opacity = "1";
              }
            }
            var classe = document.querySelector("#kariesSuperfisia5_after");
            if (classe) {
              classe.removeAttribute("class", "active");
              classe.setAttribute("class", "btn list-group-item");
            }
          });
      } else if (idPolygon == "XD" + idSvg) {
        $(x)
          .parent()
          .find(".ausente48")
          .each(function () {
            console.log("hallo");
            var idPolygon2 = $(this).attr("class");
            var idSvg2 = $(this).attr("id");
            $("." + idSvg2).attr({ stroke: "Black", opacity: "1" });
            // console.log('hallo',idSvg2);
            // var e = document.querySelector("."+idSvg2+"");
            // if (e) {
            //     e.removeAttribute('class');
            //     e.setAttribute("stroke","black");
            //     e.setAttribute("opacity","1");
            // }
            for (var i = 0; i < allDentalAfter.length; i++) {
              if (allDentalAfter[i].id === idSvg) {
                allDentalAfter[i].data.XC = "black";
                allDentalAfter[i].data.XC_opacity = "1";
              }
            }
            var classe = document.querySelector("#kariesSuperfisia5_after");
            if (classe) {
              classe.removeAttribute("class", "active");
              classe.setAttribute("class", "btn list-group-item");
            }
          });
      } else if (idPolygon == "XE" + idSvg) {
        $(x)
          .parent()
          .find(".ausente49")
          .each(function () {
            console.log("hallo");
            var idPolygon2 = $(this).attr("class");
            var idSvg2 = $(this).attr("id");
            $("." + idSvg2).attr({ stroke: "Black", opacity: "1" });
            // console.log('hallo',idSvg2);
            // var e = document.querySelector("."+idSvg2+"");
            // if (e) {
            //     e.removeAttribute('class');
            //     e.setAttribute("stroke","black");
            //     e.setAttribute("opacity","1");
            // }
            for (var i = 0; i < allDentalAfter.length; i++) {
              if (allDentalAfter[i].id === idSvg) {
                allDentalAfter[i].data.XE = "black";
                allDentalAfter[i].data.XE_opacity = "1";
              }
            }
            var classe = document.querySelector("#kariesSuperfisia5_after");
            if (classe) {
              classe.removeAttribute("class", "active");
              classe.setAttribute("class", "btn list-group-item");
            }
          });
      } else if (idPolygon == "XF" + idSvg) {
        $(x)
          .parent()
          .find(".ausente50")
          .each(function () {
            console.log("hallo");
            var idPolygon2 = $(this).attr("class");
            var idSvg2 = $(this).attr("id");
            $("." + idSvg2).attr({ stroke: "Black", opacity: "1" });
            // console.log('hallo',idSvg2);
            // var e = document.querySelector("."+idSvg2+"");
            // if (e) {
            //     e.removeAttribute('class');
            //     e.setAttribute("stroke","black");
            //     e.setAttribute("opacity","1");
            // }
            for (var i = 0; i < allDentalAfter.length; i++) {
              if (allDentalAfter[i].id === idSvg) {
                allDentalAfter[i].data.XF = "black";
                allDentalAfter[i].data.XF_opacity = "1";
              }
            }
            var classe = document.querySelector("#kariesSuperfisia5_after");
            if (classe) {
              classe.removeAttribute("class", "active");
              classe.setAttribute("class", "btn list-group-item");
            }
          });
      } else if (idPolygon == "XG" + idSvg) {
        $(x)
          .parent()
          .find(".ausente51")
          .each(function () {
            console.log("hallo");
            var idPolygon2 = $(this).attr("class");
            var idSvg2 = $(this).attr("id");
            $("." + idSvg2).attr({ stroke: "Black", opacity: "1" });
            // console.log('hallo',idSvg2);
            // var e = document.querySelector("."+idSvg2+"");
            // if (e) {
            //     e.removeAttribute('class');
            //     e.setAttribute("stroke","black");
            //     e.setAttribute("opacity","1");
            // }
            for (var i = 0; i < allDentalAfter.length; i++) {
              if (allDentalAfter[i].id === idSvg) {
                allDentalAfter[i].data.XG = "black";
                allDentalAfter[i].data.XG_opacity = "1";
              }
            }
            var classe = document.querySelector("#kariesSuperfisia5_after");
            if (classe) {
              classe.removeAttribute("class", "active");
              classe.setAttribute("class", "btn list-group-item");
            }
          });
      } else if (idPolygon == "XH" + idSvg) {
        $(x)
          .parent()
          .find(".ausente52")
          .each(function () {
            console.log("hallo");
            var idPolygon2 = $(this).attr("class");
            var idSvg2 = $(this).attr("id");
            $("." + idSvg2).attr({ stroke: "Black", opacity: "1" });
            // console.log('hallo',idSvg2);
            // var e = document.querySelector("."+idSvg2+"");
            // if (e) {
            //     e.removeAttribute('class');
            //     e.setAttribute("stroke","black");
            //     e.setAttribute("opacity","1");
            // }
            for (var i = 0; i < allDentalAfter.length; i++) {
              if (allDentalAfter[i].id === idSvg) {
                allDentalAfter[i].data.XH = "black";
                allDentalAfter[i].data.XH_opacity = "1";
              }
            }
            var classe = document.querySelector("#kariesSuperfisia5_after");
            if (classe) {
              classe.removeAttribute("class", "active");
              classe.setAttribute("class", "btn list-group-item");
            }
          });
      } else if (idPolygon == "XI" + idSvg) {
        $(x)
          .parent()
          .find(".ausente53")
          .each(function () {
            console.log("hallo");
            var idPolygon2 = $(this).attr("class");
            var idSvg2 = $(this).attr("id");
            $("." + idSvg2).attr({ stroke: "Black", opacity: "1" });
            // console.log('hallo',idSvg2);
            // var e = document.querySelector("."+idSvg2+"");
            // if (e) {
            //     e.removeAttribute('class');
            //     e.setAttribute("stroke","black");
            //     e.setAttribute("opacity","1");
            // }
            for (var i = 0; i < allDentalAfter.length; i++) {
              if (allDentalAfter[i].id === idSvg) {
                allDentalAfter[i].data.XI = "black";
                allDentalAfter[i].data.XI_opacity = "1";
              }
            }
            var classe = document.querySelector("#kariesSuperfisia5_after");
            if (classe) {
              classe.removeAttribute("class", "active");
              classe.setAttribute("class", "btn list-group-item");
            }
          });
      } else if (idPolygon == "XJ" + idSvg) {
        $(x)
          .parent()
          .find(".ausente54")
          .each(function () {
            console.log("hallo");
            var idPolygon2 = $(this).attr("class");
            var idSvg2 = $(this).attr("id");
            $("." + idSvg2).attr({ stroke: "Black", opacity: "1" });
            // console.log('hallo',idSvg2);
            // var e = document.querySelector("."+idSvg2+"");
            // if (e) {
            //     e.removeAttribute('class');
            //     e.setAttribute("stroke","black");
            //     e.setAttribute("opacity","1");
            // }
            for (var i = 0; i < allDentalAfter.length; i++) {
              if (allDentalAfter[i].id === idSvg) {
                allDentalAfter[i].data.XJ = "black";
                allDentalAfter[i].data.XJ_opacity = "1";
              }
            }
            var classe = document.querySelector("#kariesSuperfisia5_after");
            if (classe) {
              classe.removeAttribute("class", "active");
              classe.setAttribute("class", "btn list-group-item");
            }
          });
      } else if (idPolygon == "XK" + idSvg) {
        $(x)
          .parent()
          .find(".ausente55")
          .each(function () {
            console.log("hallo");
            var idPolygon2 = $(this).attr("class");
            var idSvg2 = $(this).attr("id");
            $("." + idSvg2).attr({ stroke: "Black", opacity: "1" });
            // console.log('hallo',idSvg2);
            // var e = document.querySelector("."+idSvg2+"");
            // if (e) {
            //     e.removeAttribute('class');
            //     e.setAttribute("stroke","black");
            //     e.setAttribute("opacity","1");
            // }
            for (var i = 0; i < allDentalAfter.length; i++) {
              if (allDentalAfter[i].id === idSvg) {
                allDentalAfter[i].data.XK = "black";
                allDentalAfter[i].data.XK_opacity = "1";
              }
            }
            var classe = document.querySelector("#kariesSuperfisia5_after");
            if (classe) {
              classe.removeAttribute("class", "active");
              classe.setAttribute("class", "btn list-group-item");
            }
          });
      } else if (idPolygon == "XL" + idSvg) {
        $(x)
          .parent()
          .find(".ausente56")
          .each(function () {
            console.log("hallo");
            var idPolygon2 = $(this).attr("class");
            var idSvg2 = $(this).attr("id");
            $("." + idSvg2).attr({ stroke: "Black", opacity: "1" });
            // console.log('hallo',idSvg2);
            // var e = document.querySelector("."+idSvg2+"");
            // if (e) {
            //     e.removeAttribute('class');
            //     e.setAttribute("stroke","black");
            //     e.setAttribute("opacity","1");
            // }
            for (var i = 0; i < allDentalAfter.length; i++) {
              if (allDentalAfter[i].id === idSvg) {
                allDentalAfter[i].data.XL = "black";
                allDentalAfter[i].data.XL_opacity = "1";
              }
            }
            var classe = document.querySelector("#kariesSuperfisia5_after");
            if (classe) {
              classe.removeAttribute("class", "active");
              classe.setAttribute("class", "btn list-group-item");
            }
          });
      } else if (idPolygon == "XM" + idSvg) {
        $(x)
          .parent()
          .find(".ausente66")
          .each(function () {
            console.log("XM");
            var idPolygon2 = $(this).attr("class");
            var idSvg2 = $(this).attr("id");
            $("." + idSvg2).attr({ stroke: "Black", opacity: "1" });
            // console.log('hallo',idSvg2);
            // var e = document.querySelector("."+idSvg2+"");
            // if (e) {
            //     e.removeAttribute('class');
            //     e.setAttribute("stroke","black");
            //     e.setAttribute("opacity","1");
            // }
            for (var i = 0; i < allDentalAfter.length; i++) {
              if (allDentalAfter[i].id === idSvg) {
                allDentalAfter[i].data.XM = "black";
                allDentalAfter[i].data.XM_opacity = "1";
              }
            }
            var classe = document.querySelector("#kariesSuperfisia5_after");
            if (classe) {
              classe.removeAttribute("class", "active");
              classe.setAttribute("class", "btn list-group-item");
            }
          });
      } else if (idPolygon == "XN" + idSvg) {
        $(x)
          .parent()
          .find(".ausente67")
          .each(function () {
            console.log("hallo");
            var idPolygon2 = $(this).attr("class");
            var idSvg2 = $(this).attr("id");
            $("." + idSvg2).attr({ stroke: "Black", opacity: "1" });
            // console.log('hallo',idSvg2);
            // var e = document.querySelector("."+idSvg2+"");
            // if (e) {
            //     e.removeAttribute('class');
            //     e.setAttribute("stroke","black");
            //     e.setAttribute("opacity","1");
            // }
            for (var i = 0; i < allDentalAfter.length; i++) {
              if (allDentalAfter[i].id === idSvg) {
                allDentalAfter[i].data.XN = "black";
                allDentalAfter[i].data.XN_opacity = "1";
              }
            }
            var classe = document.querySelector("#kariesSuperfisia5_after");
            if (classe) {
              classe.removeAttribute("class", "active");
              classe.setAttribute("class", "btn list-group-item");
            }
          });
      } else if (idPolygon == "XO" + idSvg) {
        $(x)
          .parent()
          .find(".ausente68")
          .each(function () {
            console.log("hallo");
            var idPolygon2 = $(this).attr("class");
            var idSvg2 = $(this).attr("id");
            $("." + idSvg2).attr({ stroke: "Black", opacity: "1" });
            // console.log('hallo',idSvg2);
            // var e = document.querySelector("."+idSvg2+"");
            // if (e) {
            //     e.removeAttribute('class');
            //     e.setAttribute("stroke","black");
            //     e.setAttribute("opacity","1");
            // }
            for (var i = 0; i < allDentalAfter.length; i++) {
              if (allDentalAfter[i].id === idSvg) {
                allDentalAfter[i].data.XO = "black";
                allDentalAfter[i].data.XO_opacity = "1";
              }
            }
            var classe = document.querySelector("#kariesSuperfisia5_after");
            if (classe) {
              classe.removeAttribute("class", "active");
              classe.setAttribute("class", "btn list-group-item");
            }
          });
      } else if (idPolygon == "XP" + idSvg) {
        $(x)
          .parent()
          .find(".ausente69")
          .each(function () {
            console.log("hallo");
            var idPolygon2 = $(this).attr("class");
            var idSvg2 = $(this).attr("id");
            $("." + idSvg2).attr({ stroke: "Black", opacity: "1" });
            // console.log('hallo',idSvg2);
            // var e = document.querySelector("."+idSvg2+"");
            // if (e) {
            //     e.removeAttribute('class');
            //     e.setAttribute("stroke","black");
            //     e.setAttribute("opacity","1");
            // }
            for (var i = 0; i < allDentalAfter.length; i++) {
              if (allDentalAfter[i].id === idSvg) {
                allDentalAfter[i].data.XP = "black";
                allDentalAfter[i].data.XP_opacity = "1";
              }
            }
            var classe = document.querySelector("#kariesSuperfisia5_after");
            if (classe) {
              classe.removeAttribute("class", "active");
              classe.setAttribute("class", "btn list-group-item");
            }
          });
      } else if (idPolygon == "XQ" + idSvg) {
        $(x)
          .parent()
          .find(".ausente70")
          .each(function () {
            console.log("hallo");
            var idPolygon2 = $(this).attr("class");
            var idSvg2 = $(this).attr("id");
            $("." + idSvg2).attr({ stroke: "Black", opacity: "1" });
            // console.log('hallo',idSvg2);
            // var e = document.querySelector("."+idSvg2+"");
            // if (e) {
            //     e.removeAttribute('class');
            //     e.setAttribute("stroke","black");
            //     e.setAttribute("opacity","1");
            // }
            for (var i = 0; i < allDentalAfter.length; i++) {
              if (allDentalAfter[i].id === idSvg) {
                allDentalAfter[i].data.XQ = "black";
                allDentalAfter[i].data.XQ_opacity = "1";
              }
            }
            var classe = document.querySelector("#kariesSuperfisia5_after");
            if (classe) {
              classe.removeAttribute("class", "active");
              classe.setAttribute("class", "btn list-group-item");
            }
          });
      }

      break;

    case "kariesSuperfisia6_after":
      $(x)
        .parent()
        .find(".ausente6")
        .each(function () {
          var idPolygon2 = $(this).attr("class");
          var idSvg2 = $(this).attr("id");
          $("." + idSvg2).attr({ stroke: "Black", opacity: "1" });
          // var e = document.querySelector("."+idSvg2+"");
          // if (e) {
          //     e.removeAttribute('class');
          //     e.setAttribute("stroke","Black");
          //     e.setAttribute("opacity","1");
          // }
          for (var i = 0; i < allDentalAfter.length; i++) {
            if (allDentalAfter[i].id === idSvg) {
              allDentalAfter[i].data.O = "black";
              allDentalAfter[i].data.O_opacity = "1";
            }
          }
          var classe = document.querySelector("#kariesSuperfisia6_after");
          if (classe) {
            classe.removeAttribute("class", "active");
            classe.setAttribute("class", "btn list-group-item");
          }
        });
      break;
    case "kariesSuperfisia7_after":
      $(x)
        .parent()
        .find(".ausente7")
        .each(function () {
          var idPolygon2 = $(this).attr("class");
          var idSvg2 = $(this).attr("id");
          $("." + idSvg2).attr({ stroke: "Black", opacity: "1" });
          // console.log('idSvg2',idSvg2);
          // var e = document.querySelector("."+idSvg2+"");
          // if (e) {
          //     e.removeAttribute('class');
          //     e.setAttribute("stroke","Black");
          //     e.setAttribute("opacity","1");
          // }
          for (var i = 0; i < allDentalAfter.length; i++) {
            if (allDentalAfter[i].id === idSvg) {
              allDentalAfter[i].data.P = "black";
              allDentalAfter[i].data.P_opacity = "1";
            }
          }
          var classe = document.querySelector("#kariesSuperfisia7_after");
          if (classe) {
            classe.removeAttribute("class", "active");
            classe.setAttribute("class", "btn list-group-item");
          }
        });
      break;
    case "kariesSuperfisia8_after":
      $(x)
        .parent()
        .find(".ausente8")
        .each(function () {
          console.log("hallo");
          var idPolygon2 = $(this).attr("class");
          var idSvg2 = $(this).attr("id");
          $("." + idSvg2).attr({ stroke: "Black", opacity: "1" });
          // var e = document.querySelector("."+idSvg2+"");
          // if (e) {
          //     e.removeAttribute('class');
          //     e.setAttribute("stroke","Black");
          //     e.setAttribute("opacity","1");
          // }
          for (var i = 0; i < allDentalAfter.length; i++) {
            if (allDentalAfter[i].id === idSvg) {
              allDentalAfter[i].data.Q = "black";
              allDentalAfter[i].data.Q_opacity = "1";
            }
          }
          var classe = document.querySelector("#kariesSuperfisia8_after");
          if (classe) {
            classe.removeAttribute("class", "active");
            classe.setAttribute("class", "btn list-group-item");
          }
        });
      break;
    case "kariesSuperfisia9_after":
      console.log("hem");
      $(x)
        .parent()
        .find(".ausente9")
        .each(function () {
          var idPolygon2 = $(this).attr("class");
          var idSvg2 = $(this).attr("id");
          $("." + idSvg2).attr({ fill: "Black", opacity: "1" });
          // console.log('hallo',idSvg2);
          // console.log('idPolygon2', idPolygon2);
          // var e = document.querySelector("."+idSvg2+"");
          // if (e) {
          //     e.removeAttribute('class');
          //     e.setAttribute("fill","black");
          //     e.setAttribute("opacity","1");
          // }
          for (var i = 0; i < allDentalAfter.length; i++) {
            if (allDentalAfter[i].id === idSvg) {
              allDentalAfter[i].data.R = "black";
              allDentalAfter[i].data.R_opacity = "1";
            }
          }
          var classe = document.querySelector("#kariesSuperfisia9_after");
          if (classe) {
            classe.removeAttribute("class", "active");
            classe.setAttribute("class", "btn list-group-item");
          }
        });
      break;

    case "kariesSuperfisia10_after":
      $(x)
        .parent()
        .find(".ausente10")
        .each(function () {
          console.log("hallo");
          var idPolygon2 = $(this).attr("class");
          var idSvg2 = $(this).attr("id");
          $("." + idSvg2).attr({ stroke: "Black", opacity: "1" });
          // var e = document.querySelector("."+idSvg2+"");
          // if (e) {
          //     e.removeAttribute('class');
          //     e.setAttribute("stroke","Black");
          //     e.setAttribute("opacity","1");
          // }
          for (var i = 0; i < allDentalAfter.length; i++) {
            if (allDentalAfter[i].id === idSvg) {
              allDentalAfter[i].data.S = "black";
              allDentalAfter[i].data.S_opacity = "1";
            }
          }
          var classe = document.querySelector("#kariesSuperfisia10_after");
          if (classe) {
            classe.removeAttribute("class", "active");
            classe.setAttribute("class", "btn list-group-item");
          }
        });
      break;
    case "kariesSuperfisia_after":
      // $("#kariesSuperfisia").click(function(){
      //     console.log('klik');
      //     document.body.style.cursor = 'wait';
      // });
      console.log("name", document.getElementsByClassName(idSvg));
      $("." + idSvg + "").click(function () {
        // console.log('klik', idSvg);
        var textnode = document.getElementById(idSvg);
        console.log("textnode", textnode);
        var parent = document.getElementById("parentDiv_after");
        console.log("parent", parent);
        var childs = parent.childNodes;
        var item = childs[1];
        console.log("item", item);
        var childs2 = item.childNodes;
        var item2 = childs2[0];
        console.log("item2", item2);

        item.replaceChild(textnode, item2);

        // var itm = document.getElementById(idSvg);
        // console.log('itm', itm);
        // var cln = itm.cloneNode(true);

        // var e = document.querySelector("."+idSvg+"");
        // console.log('e', e);
        // if (e) {
        //     e.removeAttribute('transform');
        // }
        // document.getElementById("odontograma2").appendChild(cln);
      });
      break;

    default:
      console.log("borrar case");
  }

  switch (control2) {
    case "sambung_after":
      $("#" + idSvg + "").click(function () {
        var tanpaGigi = $(this).parent().children().first().text();
        var filter = idSvg.slice(6, 8);
        var kuadran = $(this).parent().attr("id");

        var left = 0,
          width = 0;
        if (arraySambung.length < 1) {
          $(x)
            .parent()
            .find(".ausente7")
            .each(function () {
              var idSvg2 = $(this).attr("id");
              var e = document.querySelector("." + idSvg2 + "");
              // if (e) {
              //     e.removeAttribute('class');
              //     e.setAttribute("style","stroke:red;");
              // }
            });

          $(x)
            .parent()
            .find(".ausente60")
            .each(function () {
              var idSvg3 = $(this).attr("id");
              console.log("svg", idSvg3);
              var e2 = document.querySelector("." + idSvg3 + "");
              if (e2) {
                e2.removeAttribute("class");
                e2.setAttribute("stroke", "black");
                e2.setAttribute("opacity", "1");
              }
              for (var i = 0; i < allDentalAfter.length; i++) {
                if (allDentalAfter[i].id === idSvg) {
                  allDentalAfter[i].data.BA = "black";
                  allDentalAfter[i].data.BA_opacity = "1";
                }
              }
            });

          // $(x).parent().find('.ausente63').each(function(){
          //     var idSvg5 =  $(this).attr('id');
          //     console.log('svg', idSvg5);
          //     var e5 = document.querySelector("."+idSvg5+"");
          //     if (e5) {
          //         e5.removeAttribute('class');
          //         e5.setAttribute("stroke","black");
          //         e5.setAttribute("opacity","1");
          //     }
          //     for (var i =  0; i < allDental.length; i++) {

          //         if (allDental[i].id === idSvg) {
          //             allDental[i].data.BD = "black";
          //             allDental[i].data.BD_opacity = "1";
          //         }
          //     }
          // });

          $(x)
            .parent()
            .find(".ausente7")
            .each(function () {
              var idSvg2 = $(this).attr("id");
              var e = document.querySelector("." + idSvg2 + "");
              if (e) {
                e.removeAttribute("class");
                e.setAttribute("stroke", "black");
                e.setAttribute("opacity", "1");
              }
              for (var i = 0; i < allDentalAfter.length; i++) {
                if (allDentalAfter[i].id === idSvg) {
                  allDentalAfter[i].data.P = "black";
                  allDentalAfter[i].data.P_opacity = "1";
                }
              }
            });

          arraySambung.push({
            diente: filter,
            cuadrante: kuadran,
            left: $(this)[0].offsetLeft,
            father: null,
          });
        } else {
          $(x)
            .parent()
            .find(".ausente62")
            .each(function () {
              var idSvg4 = $(this).attr("id");
              console.log("svg4", idSvg4);
              var e4 = document.querySelector("." + idSvg4 + "");
              console.log("e4", e4);
              if (e4) {
                e4.removeAttribute("class");
                e4.setAttribute("stroke", "black");
                e4.setAttribute("opacity", "1");
              }
              for (var i = 0; i < allDentalAfter.length; i++) {
                if (allDentalAfter[i].id === idSvg) {
                  allDentalAfter[i].data.BC = "black";
                  allDentalAfter[i].data.BC_opacity = "1";
                }
              }
            });

          // $(x).parent().find('.ausente64').each(function(){
          //     var idSvg6 =  $(this).attr('id');
          //     var e6 = document.querySelector("."+idSvg6+"");
          //     if (e6) {
          //         e6.removeAttribute('class');
          //         e6.setAttribute("stroke","black");
          //         e6.setAttribute("opacity","1");
          //     }
          //     for (var i =  0; i < allDental.length; i++) {

          //         if (allDental[i].id === idSvg) {
          //             allDental[i].data.BE = "black";
          //             allDental[i].data.BE_opacity = "1";
          //         }
          //     }
          // });

          arraySambung.push({
            diente: filter,
            cuadrante: kuadran,
            left: $(this)[0].offsetLeft,
            father: arraySambung[0].diente,
          });

          let i = parseInt(arraySambung[0].diente) + 1;
          while (i < parseInt(arraySambung[1].diente)) {
            console.log("x", x);

            $(x)
              .parent()
              .find(".ausente")
              .each(function () {
                var e = document.querySelector(".Hdental" + i + "");
                if (e) {
                  e.removeAttribute("class");
                  e.setAttribute("fill", "black");
                  e.setAttribute("stroke", "black");
                  e.setAttribute("opacity", "1");
                }
                for (var j = 0; j < allDentalAfter.length; j++) {
                  if (allDentalAfter[j].id === "dental" + i + "") {
                    console.log("dental" + j);
                    //console.log('dental',  allDental[i].id);
                    allDentalAfter[j].data.H = "black";
                    allDentalAfter[j].data.H_opacity = "1";
                  }
                }
              });

            $(x)
              .parent()
              .find(".ausente61")
              .each(function () {
                console.log("coba");
                var e = document.querySelector(".BBdental" + i + "");
                console.log("enen", e);
                if (e) {
                  e.removeAttribute("class");
                  e.setAttribute("stroke", "black");
                  e.setAttribute("opacity", "1");
                }
                // for (var i =  0; i < allDental.length; i++) {

                //     if (allDental[i].id === idSvg) {
                //         allDental[i].data.BB = "black";
                //     }
                // }
                for (var j = 0; j < allDentalAfter.length; j++) {
                  if (allDentalAfter[j].id === "dental" + i + "") {
                    console.log("dental" + j);
                    //console.log('dental',  allDental[i].id);
                    allDentalAfter[j].data.BB = "black";
                    allDentalAfter[j].data.BB_opacity = "1";
                  }
                }
              });

            $(x)
              .parent()
              .find(".ausente7")
              .each(function () {
                var e = document.querySelector(".Pdental" + i + "");
                if (e) {
                  e.removeAttribute("class");
                  e.setAttribute("stroke", "black");
                  e.setAttribute("opacity", "1");
                }
                // for (var i =  0; i < allDental.length; i++) {

                //     if (allDental[i].id === idSvg) {
                //         allDental[i].data.P = "black";
                //     }
                // }
                for (var j = 0; j < allDentalAfter.length; j++) {
                  if (allDentalAfter[j].id === "dental" + i + "") {
                    console.log("dental" + j);
                    //console.log('dental',  allDental[i].id);
                    allDentalAfter[j].data.P = "black";
                    allDentalAfter[j].data.P_opacity = "1";
                  }
                }
              });

            i = i + 1;
          }

          $(x)
            .parent()
            .find(".ausente7")
            .each(function () {
              var idSvg2 = $(this).attr("id");
              var e = document.querySelector("." + idSvg2 + "");
              if (e) {
                e.removeAttribute("class");
                e.setAttribute("stroke", "black");
                e.setAttribute("opacity", "1");
              }
              for (var i = 0; i < allDentalAfter.length; i++) {
                if (allDentalAfter[i].id === idSvg) {
                  allDentalAfter[i].data.P = "black";
                  allDentalAfter[i].data.P_opacity = "1";
                }
              }

              var classe = document.querySelector("#sambung_after");
              if (classe) {
                classe.removeAttribute("class", "active");
                classe.setAttribute("class", "btn list-group-item");
              }
              arraySambung = [];
            });
        }
      });
      break;
    case "porcelain_after":
      // $(x).parent().find('.ausente7').each(function(){
      var class_1 = document.querySelector("#kariesSuperfisia2_after");
      // console.log('au', class_1);
      if (class_1) {
        class_1.removeAttribute("class", "active");
        class_1.setAttribute("class", "btn list-group-item");
      }
      //      });
      $("#" + idSvg + "").click(function () {
        var tanpaGigi = $(this).parent().children().first().text();
        var filter = idSvg.slice(6, 8);
        var kuadran = $(this).parent().attr("id");

        var left = 0,
          width = 0;
        console.log(arraySambung.length);
        if (arraySambung.length < 1) {
          $(x)
            .parent()
            .find(".ausente7")
            .each(function () {
              var idSvg2 = $(this).attr("id");
              var e = document.querySelector("." + idSvg2 + "");
              // if (e) {
              //     e.removeAttribute('class');
              //     e.setAttribute("style","stroke:red;");
              // }
            });

          $(x)
            .parent()
            .find(".ausente59")
            .each(function () {
              var idSvg3 = $(this).attr("id");
              var e2 = document.querySelector("." + idSvg3 + "");
              if (e2) {
                e2.removeAttribute("class");
                e2.setAttribute("fill", "black");
                e2.setAttribute("stroke", "black");
                e2.setAttribute("opacity", "1");
              }
              for (var i = 0; i < allDentalAfter.length; i++) {
                if (allDentalAfter[i].id === idSvg) {
                  allDentalAfter[i].data.AB = "black";
                  allDentalAfter[i].data.AB_opacity = "1";
                }
              }
            });

          $(x)
            .parent()
            .find(".ausente60")
            .each(function () {
              var idSvg3 = $(this).attr("id");
              // console.log('svg', idSvg3);
              var e2 = document.querySelector("." + idSvg3 + "");
              if (e2) {
                e2.removeAttribute("class");
                e2.setAttribute("stroke", "black");
                e2.setAttribute("opacity", "1");
              }
              for (var i = 0; i < allDentalAfter.length; i++) {
                if (allDentalAfter[i].id === idSvg) {
                  allDentalAfter[i].data.BA = "black";
                  allDentalAfter[i].data.BA_opacity = "1";
                }
              }
            });

          //     $(x).parent().find('.ausente60').each(function(){
          //     var idSvg3 =  $(this).attr('id');
          //     console.log('svg', idSvg3);
          //     var e2 = document.querySelector("."+idSvg3+"");
          //     if (e2) {
          //         e2.removeAttribute('class');
          //         e2.setAttribute("stroke","black");
          //         e2.setAttribute("opacity","1");
          //     }
          //     for (var i =  0; i < allDental.length; i++) {

          //         if (allDental[i].id === idSvg) {
          //             allDental[i].data.BA = "black";
          //             allDental[i].data.BA_opacity = "1";
          //         }
          //     }
          // });

          // $(x).parent().find('.ausente63').each(function(){
          //     var idSvg5 =  $(this).attr('id');
          //    // console.log('svg', idSvg5);
          //     var e5 = document.querySelector("."+idSvg5+"");
          //     if (e5) {
          //         e5.removeAttribute('class');
          //         e5.setAttribute("stroke","black");
          //         e5.setAttribute("opacity","1");
          //     }
          //     for (var i =  0; i < allDental.length; i++) {

          //         if (allDental[i].id === idSvg) {
          //             allDental[i].data.BD = "black";
          //             allDental[i].data.BD_opacity = "1";
          //         }
          //     }
          // });

          $(x)
            .parent()
            .find(".ausente7")
            .each(function () {
              var idSvg2 = $(this).attr("id");
              var e = document.querySelector("." + idSvg2 + "");
              if (e) {
                e.removeAttribute("class");
                e.setAttribute("stroke", "black");
                e.setAttribute("opacity", "1");
              }
              for (var i = 0; i < allDentalAfter.length; i++) {
                if (allDentalAfter[i].id === idSvg) {
                  allDentalAfter[i].data.P = "black";
                  allDentalAfter[i].data.P_opacity = "1";
                }
              }
            });

          arraySambung.push({
            diente: filter,
            cuadrante: kuadran,
            left: $(this)[0].offsetLeft,
            father: null,
          });
        } else {
          $(x)
            .parent()
            .find(".ausente59")
            .each(function () {
              var idSvg3 = $(this).attr("id");
              var e3 = document.querySelector("." + idSvg3 + "");
              if (e3) {
                e3.removeAttribute("class");
                e3.setAttribute("fill", "black");
                e3.setAttribute("stroke", "black");
                e3.setAttribute("opacity", "1");
                // e.setAttribute('class','ausente60');
              }
              for (var i = 0; i < allDentalAfter.length; i++) {
                if (allDentalAfter[i].id === idSvg) {
                  allDentalAfter[i].data.AB = "black";
                  allDentalAfter[i].data.AB_opacity = "1";
                }
              }
            });

          $(x)
            .parent()
            .find(".ausente62")
            .each(function () {
              var idSvg4 = $(this).attr("id");

              var e4 = document.querySelector("." + idSvg4 + "");
              console.log("e4", e4);
              if (e4) {
                e4.removeAttribute("class");
                e4.setAttribute("stroke", "black");
                e4.setAttribute("opacity", "1");
              }
              for (var i = 0; i < allDentalAfter.length; i++) {
                console.log("svg4", idSvg4);
                console.log("svg", idSvg);
                if (allDentalAfter[i].id === idSvg) {
                  console.log("svg4ne", idSvg);
                  allDentalAfter[i].data.BC = "black";
                  allDentalAfter[i].data.BC_opacity = "1";
                }
              }
            });

          // $(x).parent().find('.ausente64').each(function(){
          //     var idSvg6 =  $(this).attr('id');
          //     var e6 = document.querySelector("."+idSvg6+"");
          //     if (e6) {
          //         e6.removeAttribute('class');
          //         e6.setAttribute("stroke","black");
          //         e6.setAttribute("opacity","1");
          //     }
          //     for (var i =  0; i < allDental.length; i++) {

          //         if (allDental[i].id === idSvg) {
          //             allDental[i].data.BE = "black";
          //             allDental[i].data.BE_opacity = "1";
          //         }
          //     }
          // });

          arraySambung.push({
            diente: filter,
            cuadrante: kuadran,
            left: $(this)[0].offsetLeft,
            father: arraySambung[0].diente,
          });

          let i = parseInt(arraySambung[0].diente) + 1;
          while (i < parseInt(arraySambung[1].diente)) {
            //console.log(i);
            $(x)
              .parent()
              .find(".ausente")
              .each(function () {
                //  console.log('ine2',i);
                var e = document.querySelector(".Hdental" + i + "");
                if (e) {
                  e.removeAttribute("class");
                  e.setAttribute("fill", "black");
                  e.setAttribute("stroke", "black");
                  e.setAttribute("opacity", "1");
                }
                for (var j = 0; j < allDentalAfter.length; j++) {
                  if (allDentalAfter[j].id === "dental" + i + "") {
                    //   console.log("dental"+j);
                    //console.log('dental',  allDental[i].id);
                    allDentalAfter[j].data.H = "black";
                    allDentalAfter[j].data.H_opacity = "1";
                  }
                }
              });

            // console.log('xne',x);

            $(x)
              .parent()
              .find(".ausente65")
              .each(function () {
                // console.log('ine',i);
                var e = document.querySelector(".BFdental" + i + "");
                //console.log('ene', e);
                if (e) {
                  e.removeAttribute("class");
                  e.setAttribute("fill", "black");
                  e.setAttribute("stroke", "black");
                  e.setAttribute("opacity", "1");
                }
                for (var j = 0; j < allDentalAfter.length; j++) {
                  if (allDentalAfter[j].id === "dental" + i + "") {
                    // console.log("dental"+j);
                    //console.log('dental',  allDental[i].id);
                    allDentalAfter[j].data.BF = "black";
                    allDentalAfter[j].data.BF_opacity = "1";
                  }
                }
              });

            $(x)
              .parent()
              .find(".ausente61")
              .each(function () {
                //console.log('coba');
                var e = document.querySelector(".BBdental" + i + "");
                //console.log('enen', e);
                if (e) {
                  e.removeAttribute("class");
                  e.setAttribute("stroke", "black");
                  e.setAttribute("opacity", "1");
                }
                for (var j = 0; j < allDentalAfter.length; j++) {
                  if (allDentalAfter[j].id === "dental" + i + "") {
                    //console.log("dental"+j);
                    //console.log('dental',  allDental[i].id);
                    allDentalAfter[j].data.BB = "black";
                    allDentalAfter[j].data.BB_opacity = "1";
                  }
                }
              });

            $(x)
              .parent()
              .find(".ausente7")
              .each(function () {
                var e = document.querySelector(".Pdental" + i + "");
                if (e) {
                  e.removeAttribute("class");
                  e.setAttribute("stroke", "black");
                  e.setAttribute("opacity", "1");
                }
                for (var j = 0; j < allDentalAfter.length; j++) {
                  if (allDentalAfter[j].id === "dental" + i + "") {
                    //console.log("dental"+j);
                    //console.log('dental',  allDental[i].id);
                    allDentalAfter[j].data.P = "black";
                    allDentalAfter[j].data.P_opacity = "1";
                  }
                }
              });

            i = i + 1;
          }

          $(x)
            .parent()
            .find(".ausente7")
            .each(function () {
              var idSvg2 = $(this).attr("id");
              var e = document.querySelector("." + idSvg2 + "");
              if (e) {
                e.removeAttribute("class");
                e.setAttribute("stroke", "black");
                e.setAttribute("opacity", "1");
              }
              for (var i = 0; i < allDentalAfter.length; i++) {
                if (allDentalAfter[i].id === idSvg) {
                  allDentalAfter[i].data.P = "black";
                  allDentalAfter[i].data.P_opacity = "1";
                }
              }
              // $(x).parent().find('.ausente7').each(function(){
              //     var idSvg2 =  $(this).attr('id');
              //     var e = document.querySelector("."+idSvg2+"");
              //     if (e) {
              //         e.removeAttribute('class');
              //         e.setAttribute("stroke","black");
              //         e.setAttribute("opacity","1");
              //     }
              // });

              var classe = document.querySelector("#porcelain_after");
              if (classe) {
                classe.removeAttribute("class", "active");
                classe.setAttribute("class", "btn list-group-item");
              }

              arraySambung = [];
            });
        }
      });
      break;
    default:
      console.log("borrar case");
  }
  switch (control3) {
    case "non":
      var filter = idSvg.slice(6, 8);
      var yne = 37;
      var keterangan_gigi = "non";
      console.log("idSvg" + idSvg);
      keadaan_gigi(filter, yne, idSvg, keterangan_gigi, x, control3);

      break;
    case "att":
      var filter = idSvg.slice(6, 8);
      var yne = 37;
      var keterangan_gigi = "att";

      keadaan_gigi(filter, yne, idSvg, keterangan_gigi, x, control3);
      break;
    case "une":
      var filter = idSvg.slice(6, 8);
      var yne = 37;
      var keterangan_gigi = "une";

      keadaan_gigi(filter, yne, idSvg, keterangan_gigi, x, control3);
      break;
    case "abr":
      var filter = idSvg.slice(6, 8);
      var yne = 37;
      var keterangan_gigi = "abr";

      keadaan_gigi(filter, yne, idSvg, keterangan_gigi, x, control3);
      break;
    case "pre":
      var filter = idSvg.slice(6, 8);
      var yne = 37;
      var keterangan_gigi = "pre";

      keadaan_gigi(filter, yne, idSvg, keterangan_gigi, x, control3);
      break;
    case "cfr":
      var filter = idSvg.slice(6, 8);
      var yne = 37;
      var keterangan_gigi = "cfr";

      keadaan_gigi(filter, yne, idSvg, keterangan_gigi, x, control3);
      break;
    case "imv":
      var filter = idSvg.slice(6, 8);
      var yne = 37;
      var keterangan_gigi = "imv";

      keadaan_gigi(filter, yne, idSvg, keterangan_gigi, x, control3);
      break;
    case "rrx":
      var filter = idSvg.slice(6, 8);
      var yne = 37;
      var keterangan_gigi = "rrx";

      keadaan_gigi(filter, yne, idSvg, keterangan_gigi, x, control3);
      break;
    case "ano":
      var filter = idSvg.slice(6, 8);
      var yne = 37;
      var keterangan_gigi = "ano";

      keadaan_gigi(filter, yne, idSvg, keterangan_gigi, x, control3);
      break;
    case "mis":
      var filter = idSvg.slice(6, 8);
      var yne = 37;
      var keterangan_gigi = "mis";

      keadaan_gigi(filter, yne, idSvg, keterangan_gigi, x, control3);
      break;
    case "dia":
      var filter = idSvg.slice(6, 8);
      var yne = 37;
      var keterangan_gigi = "dia";

      keadaan_gigi(filter, yne, idSvg, keterangan_gigi, x, control3);
      break;
    case "gif":
      var filter = idSvg.slice(6, 8);
      var yne = 37;
      var keterangan_gigi = "gif";

      keadaan_gigi(filter, yne, idSvg, keterangan_gigi, x, control3);
      break;
    case "pon":
      var filter = idSvg.slice(6, 8);
      var yne = 37;
      var keterangan_gigi = "pon";

      keadaan_gigi(filter, yne, idSvg, keterangan_gigi, x, control3);
      break;
    case "inl":
      var filter = idSvg.slice(6, 8);
      var yne = 37;
      var keterangan_gigi = "inl";

      keadaan_gigi(filter, yne, idSvg, keterangan_gigi, x, control3);
      break;
    case "abu":
      var filter = idSvg.slice(6, 8);
      var yne = 37;
      var keterangan_gigi = "abu";

      keadaan_gigi(filter, yne, idSvg, keterangan_gigi, x, control3);
      break;
    case "onl":
      var filter = idSvg.slice(6, 8);
      var yne = 37;
      var keterangan_gigi = "onl";

      keadaan_gigi(filter, yne, idSvg, keterangan_gigi, x, control3);
      break;
    case "prd":
      var filter = idSvg.slice(6, 8);
      var yne = 37;
      var keterangan_gigi = "prd";

      keadaan_gigi(filter, yne, idSvg, keterangan_gigi, x, control3);
      break;
    case "mpc":
      var filter = idSvg.slice(6, 8);
      var yne = 37;
      var keterangan_gigi = "mpc";

      keadaan_gigi(filter, yne, idSvg, keterangan_gigi, x, control3);
      break;
    case "fld":
      var filter = idSvg.slice(6, 8);
      var yne = 37;
      var keterangan_gigi = "fld";

      keadaan_gigi(filter, yne, idSvg, keterangan_gigi, x, control3);
      break;
    case "gmc":
      var filter = idSvg.slice(6, 8);
      var yne = 37;
      var keterangan_gigi = "gmc";

      keadaan_gigi(filter, yne, idSvg, keterangan_gigi, x, control3);
      break;
    case "acr":
      var filter = idSvg.slice(6, 8);
      var yne = 37;
      var keterangan_gigi = "acr";

      keadaan_gigi(filter, yne, idSvg, keterangan_gigi, x, control3);
      break;
    case "ipx":
      var filter = idSvg.slice(6, 8);
      var yne = 37;
      var keterangan_gigi = "ipx";

      keadaan_gigi(filter, yne, idSvg, keterangan_gigi, x, control3);
      break;
    default:
      console.log("borrar case");
  }
  return false;
}

var arrayKeterangan = [];

function keadaan_gigi(filter, yne, idSvg, keterangan_gigi, x, control) {
  //$("#loading").modal('show');
  $.ajax({
    url: link + "Doctor/ajax_add_temp",
    type: "POST",
    dataType: "json",
    data: {
      idSvg: idSvg,
      id_pemeriksaan: id_pemeriksaan,
      control: control,
      session_id: session_id,
    },
    async: true,
    success: function (response) {
      //    $("#loading").modal('hide');
      if (response.status) {
        console.log("berhasil");
      } else {
        console.log("gagal");
      }

      $.ajax({
        url:
          link +
          "Doctor/ajax_id_svg/" +
          idSvg +
          "/" +
          id_pemeriksaan +
          "/" +
          session_id,
        type: "GET",
        dataType: "JSON",
        success: function (result) {
          console.log("result", result);
          if (result == 1) {
            $(x)
              .parent()
              .parent()
              .find("." + idSvg)
              .each(function () {
                var svgNS = "http://www.w3.org/2000/svg";
                var newText = document.createElementNS(svgNS, "text");
                newText.setAttributeNS(null, "x", "6");
                newText.setAttributeNS(null, "y", "37");
                newText.setAttributeNS(null, "font-size", "6pt");

                var textNode = document.createTextNode(control);
                newText.appendChild(textNode);
                document.getElementById(idSvg).appendChild(newText);

                for (var i = 0; i < allDentalAfter.length; i++) {
                  if (allDentalAfter[i].id === idSvg) {
                    allDentalAfter[i].title_2 = control;
                  }
                }
                var classe = document.querySelector("#" + keterangan_gigi);
                if (classe) {
                  classe.removeAttribute("class", "active");
                  classe.setAttribute("class", "btn list-group-item");
                }
                //arrayKeterangan = [];
              });
          } else if (result == 2) {
            $(x)
              .parent()
              .parent()
              .find("." + idSvg)
              .each(function () {
                var svgNS = "http://www.w3.org/2000/svg";
                var newText = document.createElementNS(svgNS, "text");
                newText.setAttributeNS(null, "x", "6");
                newText.setAttributeNS(null, "y", "43");
                newText.setAttributeNS(null, "font-size", "6pt");

                var textNode = document.createTextNode(control);
                newText.appendChild(textNode);
                document.getElementById(idSvg).appendChild(newText);

                for (var i = 0; i < allDentalAfter.length; i++) {
                  if (allDentalAfter[i].id === idSvg) {
                    allDentalAfter[i].title_3 = control;
                  }
                }
                var classe = document.querySelector("#" + keterangan_gigi);
                if (classe) {
                  classe.removeAttribute("class", "active");
                  classe.setAttribute("class", "btn list-group-item");
                }

                //arrayKeterangan = [];
              });
          } else if (result == 3) {
            $(x)
              .parent()
              .parent()
              .find("." + idSvg)
              .each(function () {
                var svgNS = "http://www.w3.org/2000/svg";
                var newText = document.createElementNS(svgNS, "text");
                newText.setAttributeNS(null, "x", "6");
                newText.setAttributeNS(null, "y", "49");
                newText.setAttributeNS(null, "font-size", "6pt");

                var textNode = document.createTextNode(control);
                newText.appendChild(textNode);
                document.getElementById(idSvg).appendChild(newText);

                for (var i = 0; i < allDentalAfter.length; i++) {
                  if (allDentalAfter[i].id === idSvg) {
                    allDentalAfter[i].title_4 = control;
                  }
                }
                var classe = document.querySelector("#" + keterangan_gigi);
                if (classe) {
                  classe.removeAttribute("class", "active");
                  classe.setAttribute("class", "btn list-group-item");
                }
                //arrayKeterangan = [];
              });
          }
        },
      });
    },
  });
}
