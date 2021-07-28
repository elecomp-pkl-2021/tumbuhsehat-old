var table_user;

var formData;

var data_edit = {};

$(document).ready(function () {
  getCheckDataFromServer();
});

app_rawat_tambah = {
  init: function () {
    //loaded();
    odontogram();
  },
};

var odontogram = function () {
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

  allDental = data;

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
    if (arrId4Sisi.indexOf(data[i].id) > -1) {
      console.log("arrId4Sisi", arrId4Sisi);
      // console.log(id_pemeriksaan + "- Tes");
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
        '" value="6" stroke-width="0.5" opacity="1" class="ausente" id="F" onclick="clickSvg(this);"/></polygon>' +
        '<polygon points="20,0  20,0    20,20   15,10" fill="' +
        data[i].data.G +
        '" value="7" stroke-width="0.5" opacity="1" class="ausente" id="G" onclick="clickSvg(this);"/></polygon>' +
        '<polygon points="0,0   20,0    15,10    0,10" fill="' +
        data[i].data.T +
        '" stroke="navy" stroke-width="0.5" id="T" opacity="1" onclick="clickSvg(this);"></polygon>' +
        '<polygon points="5,10  15,10   20,20   0,20" fill="' +
        data[i].data.B +
        '" stroke="navy" stroke-width="0.5" id="B' +
        data[i].id +
        '" opacity="1" onclick="clickSvg(this);" class="B' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="20,0  20,0    20,20   15,10" fill="' +
        data[i].data.RD +
        '" stroke="navy" stroke-width="0.5" id="RD" opacity="1" onclick="clickSvg(this);"></polygon>' +
        '<polygon points="0,0   5,10     5,10    0,20" fill="' +
        data[i].data.L +
        '" stroke="navy" stroke-width="0.5" id="L" opacity="1" onclick="clickSvg(this);"></polygon>' +
        '<polygon points="0,2 2,2 20,20 18,20" fill="' +
        data[i].data.H +
        '" stroke="' +
        data[i].data.H +
        '" stroke-width="0.5" id="H' +
        data[i].id +
        '" opacity="' +
        data[i].data.H_opacity +
        '" onclick="clickSvg(this);" class="ausente H' +
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
        '" onclick="clickSvg(this);" class="ausente H' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="1,20   1,20     1,19    1,20" fill="' +
        data[i].data.M +
        '" stroke="navy" stroke-width="0.2" id="M' +
        data[i].id +
        '" opacity="' +
        data[i].data.M +
        '" onclick="clickSvg(this);" class="ausente4 M' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="2,16   2,16     2,19    2,20" fill="' +
        data[i].data.M +
        '" stroke="navy" stroke-width="0.2" id="M' +
        data[i].id +
        '" opacity="' +
        data[i].data.M +
        '" onclick="clickSvg(this);" class="ausente4 M' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="3,14   3,14     3,19    3,20" fill="' +
        data[i].data.M +
        '" stroke="navy" stroke-width="0.2" id="M' +
        data[i].id +
        '" opacity="' +
        data[i].data.M +
        '" onclick="clickSvg(this);" class="ausente4 M' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="4,12   4,12     4,19    4,20" fill="' +
        data[i].data.M +
        '" stroke="navy" stroke-width="0.2" id="M' +
        data[i].id +
        '" opacity="' +
        data[i].data.M +
        '" onclick="clickSvg(this);" class="ausente4 M' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="5,10   5,10     5,19    5,20" fill="' +
        data[i].data.M +
        '" stroke="navy" stroke-width="0.2" id="M' +
        data[i].id +
        '" opacity="' +
        data[i].data.M +
        '" onclick="clickSvg(this);" class="ausente4 M' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="6,10   6,10     6,19    6,20" fill="' +
        data[i].data.M +
        '" stroke="navy" stroke-width="0.2" id="M' +
        data[i].id +
        '" opacity="' +
        data[i].data.M +
        '" onclick="clickSvg(this);" class="ausente4 M' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="7,10   7,10     7,19    7,20" fill="' +
        data[i].data.M +
        '" stroke="navy" stroke-width="0.2" id="M' +
        data[i].id +
        '" opacity="' +
        data[i].data.M +
        '" onclick="clickSvg(this);" class="ausente4 M' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="8,10   8,10     8,19    8,20" fill="' +
        data[i].data.M +
        '" stroke="navy" stroke-width="0.2" id="M' +
        data[i].id +
        '" opacity="' +
        data[i].data.M +
        '" onclick="clickSvg(this);" class="ausente4 M' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="9,10   9,10     9,19    9,20" fill="' +
        data[i].data.M +
        '" stroke="navy" stroke-width="0.2" id="M' +
        data[i].id +
        '" opacity="' +
        data[i].data.M +
        '" onclick="clickSvg(this);" class="ausente4 M' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="10,10   10,10     10,19    10,20" fill="' +
        data[i].data.M +
        '" stroke="navy" stroke-width="0.2" id="M' +
        data[i].id +
        '" opacity="' +
        data[i].data.M +
        '" onclick="clickSvg(this);" class="ausente4 M' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="11,10   11,10     11,19    11,20" fill="' +
        data[i].data.M +
        '" stroke="navy" stroke-width="0.2" id="M' +
        data[i].id +
        '" opacity="' +
        data[i].data.M +
        '" onclick="clickSvg(this);" class="ausente4 M' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="12,10   12,10     12,19    12,20" fill="' +
        data[i].data.M +
        '" stroke="navy" stroke-width="0.2" id="M' +
        data[i].id +
        '" opacity="' +
        data[i].data.M +
        '" onclick="clickSvg(this);" class="ausente4 M' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="13,10   13,10     13,19    13,20" fill="' +
        data[i].data.M +
        '" stroke="navy" stroke-width="0.2" id="M' +
        data[i].id +
        '" opacity="' +
        data[i].data.M +
        '" onclick="clickSvg(this);" class="ausente4 M' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="14,10   14,10     14,19    14,20" fill="' +
        data[i].data.M +
        '" stroke="navy" stroke-width="0.2" id="M' +
        data[i].id +
        '" opacity="' +
        data[i].data.M +
        '" onclick="clickSvg(this);" class="ausente4 M' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="15,10   15,10     15,19    15,20" fill="' +
        data[i].data.M +
        '" stroke="navy" stroke-width="0.2" id="M' +
        data[i].id +
        '" opacity="' +
        data[i].data.M +
        '" onclick="clickSvg(this);" class="ausente4 M' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="16,12   16,12     16,19    16,20" fill="' +
        data[i].data.M +
        '" stroke="navy" stroke-width="0.2" id="M' +
        data[i].id +
        '" opacity="' +
        data[i].data.M +
        '" onclick="clickSvg(this);" class="ausente4 M' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="17,14   17,14     17,19    17,20" fill="' +
        data[i].data.M +
        '" stroke="navy" stroke-width="0.2" id="M' +
        data[i].id +
        '" opacity="' +
        data[i].data.M +
        '" onclick="clickSvg(this);" class="ausente4 M' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="18,16   18,16     18,19    18,20" fill="' +
        data[i].data.M +
        '" stroke="navy" stroke-width="0.2" id="M' +
        data[i].id +
        '" opacity="' +
        data[i].data.M +
        '" onclick="clickSvg(this);" class="ausente4 M' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="19,20   19,20     19,19    19,20" fill="' +
        data[i].data.M +
        '" stroke="navy" stroke-width="0.2" id="M' +
        data[i].id +
        '" opacity="' +
        data[i].data.M +
        '" onclick="clickSvg(this);" class="ausente4 M' +
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
        '" onclick="clickSvg(this);" class="ausente7 P' +
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
        '" onclick="clickSvg(this);" class="ausente7 P' +
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
        '" onclick="clickSvg(this);" class="ausente7 P' +
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
        '" onclick="clickSvg(this);" class="ausente7 P' +
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
        '" onclick="clickSvg(this);" class="ausente8 Q' +
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
        '" onclick="clickSvg(this);" class="ausente8 Q' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="5,20   15,20    15,20   10,30" fill="' +
        data[i].data.R +
        '" stroke="navy" stroke-width="2" id="R' +
        data[i].id +
        '" opacity="' +
        data[i].data.R_opacity +
        '" onclick="clickSvg(this);" class="ausente9 R' +
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
        '" onclick="clickSvg(this);" class="ausente10 S' +
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
        '" onclick="clickSvg(this);" class="ausente10 S' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="1,2   1,2     1,0    1,0" fill="' +
        data[i].data.TV +
        '" stroke="navy" stroke-width="0.2" id="TV' +
        data[i].id +
        '" opacity="' +
        data[i].data.TV +
        '" onclick="clickSvg(this);" class="ausente41 TV' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="2,4   2,4     2,0    2,0" fill="' +
        data[i].data.TV +
        '" stroke="navy" stroke-width="0.2" id="TV' +
        data[i].id +
        '" opacity="' +
        data[i].data.TV +
        '" onclick="clickSvg(this);" class="ausente41 TV' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="3,6   3,6     3,0    3,0" fill="' +
        data[i].data.TV +
        '" stroke="navy" stroke-width="0.2" id="TV' +
        data[i].id +
        '" opacity="' +
        data[i].data.TV +
        '" onclick="clickSvg(this);" class="ausente41 TV' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="4,8   4,8     4,0    4,0" fill="' +
        data[i].data.TV +
        '" stroke="navy" stroke-width="0.2" id="TV' +
        data[i].id +
        '" opacity="' +
        data[i].data.TV +
        '" onclick="clickSvg(this);" class="ausente41 TV' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="5,10   5,10     5,0    5,0" fill="' +
        data[i].data.TV +
        '" stroke="navy" stroke-width="0.2" id="TV' +
        data[i].id +
        '" opacity="' +
        data[i].data.TV +
        '" onclick="clickSvg(this);" class="ausente41 TV' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="6,10   6,10     6,0    6,0" fill="' +
        data[i].data.TV +
        '" stroke="navy" stroke-width="0.2" id="TV' +
        data[i].id +
        '" opacity="' +
        data[i].data.TV +
        '" onclick="clickSvg(this);" class="ausente41 TV' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="7,10   7,10     7,0    7,0" fill="' +
        data[i].data.TV +
        '" stroke="navy" stroke-width="0.2" id="TV' +
        data[i].id +
        '" opacity="' +
        data[i].data.TV +
        '" onclick="clickSvg(this);" class="ausente41 TV' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="8,10   8,10     8,0    8,0" fill="' +
        data[i].data.TV +
        '" stroke="navy" stroke-width="0.2" id="TV' +
        data[i].id +
        '" opacity="' +
        data[i].data.TV +
        '" onclick="clickSvg(this);" class="ausente41 TV' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="9,10   9,10     9,0    9,0" fill="' +
        data[i].data.TV +
        '" stroke="navy" stroke-width="0.2" id="TV' +
        data[i].id +
        '" opacity="' +
        data[i].data.TV +
        '" onclick="clickSvg(this);" class="ausente41 TV' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="10,10   10,10     10,0    10,0" fill="' +
        data[i].data.TV +
        '" stroke="navy" stroke-width="0.2" id="TV' +
        data[i].id +
        '" opacity="' +
        data[i].data.TV +
        '" onclick="clickSvg(this);" class="ausente41 TV' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="11,10   11,10     11,0    11,0" fill="' +
        data[i].data.TV +
        '" stroke="navy" stroke-width="0.2" id="TV' +
        data[i].id +
        '" opacity="' +
        data[i].data.TV +
        '" onclick="clickSvg(this);" class="ausente41 TV' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="12,10   12,10     12,0    12,0" fill="' +
        data[i].data.TV +
        '" stroke="navy" stroke-width="0.2" id="TV' +
        data[i].id +
        '" opacity="' +
        data[i].data.TV +
        '" onclick="clickSvg(this);" class="ausente41 TV' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="13,10   13,10     13,0    13,0" fill="' +
        data[i].data.TV +
        '" stroke="navy" stroke-width="0.2" id="TV' +
        data[i].id +
        '" opacity="' +
        data[i].data.TV +
        '" onclick="clickSvg(this);" class="ausente41 TV' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="14,10   14,10     14,0    14,0" fill="' +
        data[i].data.TV +
        '" stroke="navy" stroke-width="0.2" id="TV' +
        data[i].id +
        '" opacity="' +
        data[i].data.TV +
        '" onclick="clickSvg(this);" class="ausente41 TV' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="15,10   15,10     15,0    15,0" fill="' +
        data[i].data.TV +
        '" stroke="navy" stroke-width="0.2" id="TV' +
        data[i].id +
        '" opacity="' +
        data[i].data.TV +
        '" onclick="clickSvg(this);" class="ausente41 TV' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="16,8   16,8     16,0    16,0" fill="' +
        data[i].data.TV +
        '" stroke="navy" stroke-width="0.2" id="TV' +
        data[i].id +
        '" opacity="' +
        data[i].data.TV +
        '" onclick="clickSvg(this);" class="ausente41 TV' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="17,6   17,6     17,0    17,0" fill="' +
        data[i].data.TV +
        '" stroke="navy" stroke-width="0.2" id="TV' +
        data[i].id +
        '" opacity="' +
        data[i].data.TV +
        '" onclick="clickSvg(this);" class="ausente41 TV' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="18,4   18,4     18,0    18,0" fill="' +
        data[i].data.TV +
        '" stroke="navy" stroke-width="0.2" id="TV' +
        data[i].id +
        '" opacity="' +
        data[i].data.TV +
        '" onclick="clickSvg(this);" class="ausente41 TV' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="19,2   19,2     19,0    19,0" fill="' +
        data[i].data.TV +
        '" stroke="navy" stroke-width="0.2" id="TV' +
        data[i].id +
        '" opacity="' +
        data[i].data.TV +
        '" onclick="clickSvg(this);" class="ausente41 TV' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="0,2   1,2     1,2    1,2" fill="' +
        data[i].data.U +
        '" stroke="navy" stroke-width="0.2" id="U' +
        data[i].id +
        '" opacity="' +
        data[i].data.U +
        '" onclick="clickSvg(this);" class="ausente42 U' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="0,3   1,3     1,3    1,3" fill="' +
        data[i].data.U +
        '" stroke="navy" stroke-width="0.2" id="U' +
        data[i].id +
        '" opacity="' +
        data[i].data.U +
        '" onclick="clickSvg(this);" class="ausente42 U' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="0,4   2,4     2,4    2,4" fill="' +
        data[i].data.U +
        '" stroke="navy" stroke-width="0.2" id="U' +
        data[i].id +
        '" opacity="' +
        data[i].data.U +
        '" onclick="clickSvg(this);" class="ausente42 U' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="0,5   2,5     2,5    2,5" fill="' +
        data[i].data.U +
        '" stroke="navy" stroke-width="0.2" id="U' +
        data[i].id +
        '" opacity="' +
        data[i].data.U +
        '" onclick="clickSvg(this);" class="ausente42 U' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="0,6   3,6     3,6    3,6" fill="' +
        data[i].data.U +
        '" stroke="navy" stroke-width="0.2" id="U' +
        data[i].id +
        '" opacity="' +
        data[i].data.U +
        '" onclick="clickSvg(this);" class="ausente42 U' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="0,7   3,7     3,7    3,7" fill="' +
        data[i].data.U +
        '" stroke="navy" stroke-width="0.2" id="U' +
        data[i].id +
        '" opacity="' +
        data[i].data.U +
        '" onclick="clickSvg(this);" class="ausente42 U' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="0,8   4,8     4,8    4,8" fill="' +
        data[i].data.U +
        '" stroke="navy" stroke-width="0.2" id="U' +
        data[i].id +
        '" opacity="' +
        data[i].data.U +
        '" onclick="clickSvg(this);" class="ausente42 U' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="0,9   4,9     2,9    2,9" fill="' +
        data[i].data.U +
        '" stroke="navy" stroke-width="0.2" id="U' +
        data[i].id +
        '" opacity="' +
        data[i].data.U +
        '" onclick="clickSvg(this);" class="ausente42 U' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="0,10   5,10     5,10    5,10" fill="' +
        data[i].data.U +
        '" stroke="navy" stroke-width="0.2" id="U' +
        data[i].id +
        '" opacity="' +
        data[i].data.U +
        '" onclick="clickSvg(this);" class="ausente42 U' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="0,11   4,11     4,11    4,11" fill="' +
        data[i].data.U +
        '" stroke="navy" stroke-width="0.2" id="U' +
        data[i].id +
        '" opacity="' +
        data[i].data.U +
        '" onclick="clickSvg(this);" class="ausente42 U' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="0,12   4,12     4,12    4,12" fill="' +
        data[i].data.U +
        '" stroke="navy" stroke-width="0.2" id="U' +
        data[i].id +
        '" opacity="' +
        data[i].data.U +
        '" onclick="clickSvg(this);" class="ausente42 U' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="0,13   3,13     3,13    3,13" fill="' +
        data[i].data.U +
        '" stroke="navy" stroke-width="0.2" id="U' +
        data[i].id +
        '" opacity="' +
        data[i].data.U +
        '" onclick="clickSvg(this);" class="ausente42 U' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="0,14   3,14     3,14    3,14" fill="' +
        data[i].data.U +
        '" stroke="navy" stroke-width="0.2" id="U' +
        data[i].id +
        '" opacity="' +
        data[i].data.U +
        '" onclick="clickSvg(this);" class="ausente42 U' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="0,15   2,15     2,15    2,15" fill="' +
        data[i].data.U +
        '" stroke="navy" stroke-width="0.2" id="U' +
        data[i].id +
        '" opacity="' +
        data[i].data.U +
        '" onclick="clickSvg(this);" class="ausente42 U' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="0,16   2,16     2,16    2,16" fill="' +
        data[i].data.U +
        '" stroke="navy" stroke-width="0.2" id="U' +
        data[i].id +
        '" opacity="' +
        data[i].data.U +
        '" onclick="clickSvg(this);" class="ausente42 U' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="0,17   1,17     1,17    1,17" fill="' +
        data[i].data.U +
        '" stroke="navy" stroke-width="0.2" id="U' +
        data[i].id +
        '" opacity="' +
        data[i].data.U +
        '" onclick="clickSvg(this);" class="ausente42 U' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="0,18   1,18     1,18    1,18" fill="' +
        data[i].data.U +
        '" stroke="navy" stroke-width="0.2" id="U' +
        data[i].id +
        '" opacity="' +
        data[i].data.U +
        '" onclick="clickSvg(this);" class="ausente42 U' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="19,2   20,2     20,2    20,2" fill="' +
        data[i].data.V +
        '" stroke="navy" stroke-width="0.2" id="V' +
        data[i].id +
        '" opacity="' +
        data[i].data.V +
        '" onclick="clickSvg(this);" class="ausente43 V' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="19,3   20,3     20,3    20,3" fill="' +
        data[i].data.V +
        '" stroke="navy" stroke-width="0.2" id="V' +
        data[i].id +
        '" opacity="' +
        data[i].data.V +
        '" onclick="clickSvg(this);" class="ausente43 V' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="18,4   20,4     20,4    20,4" fill="' +
        data[i].data.V +
        '" stroke="navy" stroke-width="0.2" id="V' +
        data[i].id +
        '" opacity="' +
        data[i].data.V +
        '" onclick="clickSvg(this);" class="ausente43 V' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="18,5   20,5     20,5    20,5" fill="' +
        data[i].data.V +
        '" stroke="navy" stroke-width="0.2" id="V' +
        data[i].id +
        '" opacity="' +
        data[i].data.V +
        '" onclick="clickSvg(this);" class="ausente43 V' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="17,6   20,6     20,6    20,6" fill="' +
        data[i].data.V +
        '" stroke="navy" stroke-width="0.2" id="V' +
        data[i].id +
        '" opacity="' +
        data[i].data.V +
        '" onclick="clickSvg(this);" class="ausente43 V' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="17,7   20,7     20,7    20,7" fill="' +
        data[i].data.V +
        '" stroke="navy" stroke-width="0.2" id="V' +
        data[i].id +
        '" opacity="' +
        data[i].data.V +
        '" onclick="clickSvg(this);" class="ausente43 V' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="16,8   20,8     20,8    20,8" fill="' +
        data[i].data.V +
        '" stroke="navy" stroke-width="0.2" id="V' +
        data[i].id +
        '" opacity="' +
        data[i].data.V +
        '" onclick="clickSvg(this);" class="ausente43 V' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="16,9   20,9     20,9    20,9" fill="' +
        data[i].data.V +
        '" stroke="navy" stroke-width="0.2" id="V' +
        data[i].id +
        '" opacity="' +
        data[i].data.V +
        '" onclick="clickSvg(this);" class="ausente43 V' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="15,10   20,10     20,10    20,10" fill="' +
        data[i].data.V +
        '" stroke="navy" stroke-width="0.2" id="V' +
        data[i].id +
        '" opacity="' +
        data[i].data.V +
        '" onclick="clickSvg(this);" class="ausente43 V' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="16,11   20,11     20,11    20,11" fill="' +
        data[i].data.V +
        '" stroke="navy" stroke-width="0.2" id="V' +
        data[i].id +
        '" opacity="' +
        data[i].data.V +
        '" onclick="clickSvg(this);" class="ausente43 V' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="16,12   20,12     20,12    20,12" fill="' +
        data[i].data.V +
        '" stroke="navy" stroke-width="0.2" id="V' +
        data[i].id +
        '" opacity="' +
        data[i].data.V +
        '" onclick="clickSvg(this);" class="ausente43 V' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="17,13   20,13     20,13    20,13" fill="' +
        data[i].data.V +
        '" stroke="navy" stroke-width="0.2" id="V' +
        data[i].id +
        '" opacity="' +
        data[i].data.V +
        '" onclick="clickSvg(this);" class="ausente43 V' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="17,14   20,14     20,14    20,14" fill="' +
        data[i].data.V +
        '" stroke="navy" stroke-width="0.2" id="V' +
        data[i].id +
        '" opacity="' +
        data[i].data.V +
        '" onclick="clickSvg(this);" class="ausente43 V' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="18,15   20,15     20,15    20,15" fill="' +
        data[i].data.V +
        '" stroke="navy" stroke-width="0.2" id="V' +
        data[i].id +
        '" opacity="' +
        data[i].data.V +
        '" onclick="clickSvg(this);" class="ausente43 V' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="18,16   20,16     20,16    20,16" fill="' +
        data[i].data.V +
        '" stroke="navy" stroke-width="0.2" id="V' +
        data[i].id +
        '" opacity="' +
        data[i].data.V +
        '" onclick="clickSvg(this);" class="ausente43 V' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="19,17   20,17     20,17    20,17" fill="' +
        data[i].data.V +
        '" stroke="navy" stroke-width="0.2" id="V' +
        data[i].id +
        '" opacity="' +
        data[i].data.V +
        '" onclick="clickSvg(this);" class="ausente43 V' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="19,18   20,18     20,18    20,18" fill="' +
        data[i].data.V +
        '" stroke="navy" stroke-width="0.2" id="V' +
        data[i].id +
        '" opacity="' +
        data[i].data.V +
        '" onclick="clickSvg(this);" class="ausente43 V' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="15,10   15,10     20,20    20,20" fill="' +
        data[i].data.X +
        '" stroke="navy" stroke-width="1.5" id="X" opacity="' +
        data[i].data.X_opacity +
        '" onclick="clickSvg(this);" class="ausente45"></polygon>' +
        '<polygon points="5,10   5,10     0,20    0,20" fill="' +
        data[i].data.X +
        '" stroke="navy" stroke-width="1.5" id="X" opacity="' +
        data[i].data.X_opacity +
        '" onclick="clickSvg(this);" class="ausente45"></polygon>' +
        '<polygon points="15,10   15,10     20,0    20,0" fill="' +
        data[i].data.X +
        '" stroke="navy" stroke-width="1.5" id="X" opacity="' +
        data[i].data.X_opacity +
        '" onclick="clickSvg(this);" class="ausente45"></polygon>' +
        '<polygon points="5,10   5,10     0,0    0,0" fill="' +
        data[i].data.X +
        '" stroke="navy" stroke-width="1.5" id="X" opacity="' +
        data[i].data.X_opacity +
        '" onclick="clickSvg(this);" class="ausente45"></polygon>' +
        '<polygon points="5,10   5,10     15,10    15,10" fill="' +
        data[i].data.X +
        '" stroke="navy" stroke-width="1.5" id="X" opacity="' +
        data[i].data.X_opacity +
        '" onclick="clickSvg(this);" class="ausente45"></polygon>' +
        // '<polygon points="5,10   5,10     0,0    0,0" fill="'+data[i].data.X+'" stroke="navy" stroke-width="1.5" id="X" opacity="1" onclick="clickSvg(this);" ></polygon>'+
        '<polygon points="20,0   20,0     0,0    0,0" fill="' +
        data[i].data.X +
        '" stroke="navy" stroke-width="1.5" id="X" opacity="' +
        data[i].data.X_opacity +
        '" onclick="clickSvg(this);" class="ausente45"></polygon>' +
        '<polygon points="20,0   20,0     20,20    20,20" fill="' +
        data[i].data.X +
        '" stroke="navy" stroke-width="1.5" id="X" opacity="' +
        data[i].data.X_opacity +
        '" onclick="clickSvg(this);" class="ausente45"></polygon>' +
        '<polygon points="20,20   20,20     0,20    0,20" fill="' +
        data[i].data.X +
        '" stroke="navy" stroke-width="1.5" id="X" opacity="' +
        data[i].data.X_opacity +
        '" onclick="clickSvg(this);" class="ausente45"></polygon>' +
        '<polygon points="0,0   0,0     0,20    0,20" fill="' +
        data[i].data.X +
        '" stroke="navy" stroke-width="1.5" id="X" opacity="' +
        data[i].data.X_opacity +
        '" onclick="clickSvg(this);" class="ausente45"></polygon>' +
        '<polygon points="3,0   3,0     3,19    3,20" fill="' +
        data[i].data.AB +
        '" stroke="' +
        data[i].data.AB +
        '" stroke-width="0.5" id="AB' +
        data[i].id +
        '" opacity="' +
        data[i].data.AB_opacity +
        '" onclick="clickSvg(this);" class="ausente59 AB' +
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
        '" onclick="clickSvg(this);" class="ausente59 AB' +
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
        '" onclick="clickSvg(this);" class="ausente59 AB' +
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
        '" onclick="clickSvg(this);" class="ausente59 AB' +
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
        '" onclick="clickSvg(this);" class="ausente59 AB' +
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
        '" onclick="clickSvg(this);" class="ausente59 AB' +
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
        '" onclick="clickSvg(this);" class="ausente59 AB' +
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
        '" onclick="clickSvg(this);" class="ausente59 AB' +
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
        '" onclick="clickSvg(this);" class="ausente60 BA' +
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
        '" onclick="clickSvg(this);" class="ausente61 BB' +
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
        '" onclick="clickSvg(this);" class="ausente62 BC' +
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
        '" onclick="clickSvg(this);" class="ausente63 BD' +
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
        '" onclick="clickSvg(this);" class="ausente64 BE' +
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
        '" onclick="clickSvg(this);" class="ausente65 BF' +
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
        '" onclick="clickSvg(this);" class="ausente65 BF' +
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
        '" onclick="clickSvg(this);" class="ausente65 BF' +
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
        '" onclick="clickSvg(this);" class="ausente65 BF' +
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
        '" onclick="clickSvg(this);" class="ausente65 BF' +
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
        '" onclick="clickSvg(this);" class="ausente65 BF' +
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
        '" onclick="clickSvg(this);" class="ausente65 BF' +
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
        '" onclick="clickSvg(this);" class="ausente65 BF' +
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
        '" onclick="clickSvg(this);" class="ausente45 XA' +
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
        '" onclick="clickSvg(this);" class="ausente46 XB' +
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
        '" onclick="clickSvg(this);" class="ausente47 XC' +
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
        '" onclick="clickSvg(this);" class="ausente48 XD' +
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
        '" onclick="clickSvg(this);" class="ausente66 XM' +
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
        '" onclick="clickSvg(this);" class="ausente67 XN' +
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
        '" onclick="clickSvg(this);" class="ausente68 XO' +
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
        '" onclick="clickSvg(this);" class="ausente69 XP' +
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
        '" onclick="clickSvg(this);" class="ausente70 XQ' +
        data[i].id +
        '"></polygon>' +
        '<text x="6" y="30" stroke="navy" fill="navy" stroke-width="0.1" style="font-size: 6pt;font-weight:normal">' +
        data[i].title +
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
        '" stroke-width="0.5" opacity="1" id="F" class="ausente" onclick="clickSvg(this);"/></polygon>' +
        '<polygon points="20,0  20,0    20,20   15,10" fill="' +
        data[i].data.G +
        '" stroke-width="0.5" opacity="1" id="G" class="ausente" onclick="clickSvg(this);"/></polygon>' +
        '<polygon points="5,5   15,5    15,15   5,15" fill="' +
        data[i].data.C +
        '" stroke="navy" stroke-width="0.5" id="C" opacity="1" onclick="clickSvg(this);"></polygon>' +
        '<polygon points="0,0   20,0    15,5    5,5" fill="' +
        data[i].data.T +
        '" stroke="navy" stroke-width="0.5" id="T" opacity="1" onclick="clickSvg(this);"></polygon>' +
        '<polygon points="5,15  15,15   20,20   0,20" fill="' +
        data[i].data.B +
        '" stroke="navy" stroke-width="0.5" id="B" opacity="1" onclick="clickSvg(this);"></polygon>' +
        '<polygon points="15,5  20,0    20,20   15,15" fill="' +
        data[i].data.RD +
        '" stroke="navy" stroke-width="0.5" id="RD" opacity="1" onclick="clickSvg(this);"></polygon>' +
        '<polygon points="0,0   5,5     5,15    0,20" fill="' +
        data[i].data.L +
        '" stroke="navy" stroke-width="0.5" id="L" opacity="1" onclick="clickSvg(this);"></polygon>' +
        '<polygon points="0,2 2,2 20,20 18,20" fill="' +
        data[i].data.H +
        '" stroke="' +
        data[i].data.H +
        '" stroke-width="0.5" id="H' +
        data[i].id +
        '" opacity="' +
        data[i].data.H_opacity +
        '" onclick="clickSvg(this);" class="ausente H' +
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
        '" onclick="clickSvg(this);" class="ausente H' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="5,5   15,5    15,15   5,15" fill="' +
        data[i].data.J +
        '" stroke="navy" stroke-width="0.5" id="J' +
        data[i].id +
        '" opacity="' +
        data[i].data.J_opacity +
        '" onclick="clickSvg(this);" class="ausente2 J' +
        data[i].id +
        '"></polygon>' +
        // '<polygon points="5,5   15,5    15,15   5,15" fill="'+data[i].data.K+'" stroke="navy" stroke-width="0.5" id="K'+data[i].id+'" opacity="1" onclick="clickSvg(this);" class="ausente3 K'+data[i].id+'"></polygon>'+
        '<polygon points="5,5   15,5    15,15   5,15" fill="' +
        data[i].data.N +
        '" stroke="navy" stroke-width="0.5" id="N' +
        data[i].id +
        '" opacity="' +
        data[i].data.N_opacity +
        '" onclick="clickSvg(this);" class="ausente5 N' +
        data[i].id +
        '"></polygon>' +
        // '<polygon points="5,5   15,5    15,15   5,15" fill="'+data[i].data.O+'" stroke="navy" stroke-width="2" id="O'+data[i].id+'" opacity="1" onclick="clickSvg(this);" class="ausente6"></polygon>'+
        '<polygon points="5,1   5,1     5,19    5,20" fill="' +
        data[i].data.O +
        '" stroke="' +
        data[i].data.O +
        '" stroke-width="2" id="O' +
        data[i].id +
        '" opacity="' +
        data[i].data.O_opacity +
        '" onclick="clickSvg(this);" class="ausente6 O' +
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
        '" onclick="clickSvg(this);" class="ausente6 O' +
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
        '" onclick="clickSvg(this);" class="ausente6 O' +
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
        '" onclick="clickSvg(this);" class="ausente6 O' +
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
        '" onclick="clickSvg(this);" class="ausente7 P' +
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
        '" onclick="clickSvg(this);" class="ausente7 P' +
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
        '" onclick="clickSvg(this);" class="ausente7 P' +
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
        '" onclick="clickSvg(this);" class="ausente7 P' +
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
        '" onclick="clickSvg(this);" class="ausente8 Q' +
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
        '" onclick="clickSvg(this);" class="ausente8 Q' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="5,20   15,20    15,20   10,30" fill="' +
        data[i].data.R +
        '" stroke="navy" stroke-width="2" id="R' +
        data[i].id +
        '" opacity="' +
        data[i].data.R_opacity +
        '" onclick="clickSvg(this);" class="ausente9 R' +
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
        '" onclick="clickSvg(this);" class="ausente10 S' +
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
        '" onclick="clickSvg(this);" class="ausente10 S' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="0,2   2,2     2,2    2,2" fill="' +
        data[i].data.U +
        '" stroke="navy" stroke-width="0.2" id="U' +
        data[i].id +
        '" opacity="' +
        data[i].data.U +
        '" onclick="clickSvg(this);" class="ausente42 U' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="0,3   3,3     2,3    2,3" fill="' +
        data[i].data.U +
        '" stroke="navy" stroke-width="0.2" id="U' +
        data[i].id +
        '" opacity="' +
        data[i].data.U +
        '" onclick="clickSvg(this);" class="ausente42 U' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="0,4   4,4     2,4    2,4" fill="' +
        data[i].data.U +
        '" stroke="navy" stroke-width="0.2" id="U' +
        data[i].id +
        '" opacity="' +
        data[i].data.U +
        '" onclick="clickSvg(this);" class="ausente42 U' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="0,5   5,5     2,5    2,5" fill="' +
        data[i].data.U +
        '" stroke="navy" stroke-width="0.2" id="U' +
        data[i].id +
        '" opacity="' +
        data[i].data.U +
        '" onclick="clickSvg(this);" class="ausente42 U' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="0,6   5,6     2,6    2,6" fill="' +
        data[i].data.U +
        '" stroke="navy" stroke-width="0.2" id="U' +
        data[i].id +
        '" opacity="' +
        data[i].data.U +
        '" onclick="clickSvg(this);" class="ausente42 U' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="0,7   5,7     2,7    2,7" fill="' +
        data[i].data.U +
        '" stroke="navy" stroke-width="0.2" id="U' +
        data[i].id +
        '" opacity="' +
        data[i].data.U +
        '" onclick="clickSvg(this);" class="ausente42 U' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="0,8   5,8     2,8    2,8" fill="' +
        data[i].data.U +
        '" stroke="navy" stroke-width="0.2" id="U' +
        data[i].id +
        '" opacity="' +
        data[i].data.U +
        '" onclick="clickSvg(this);" class="ausente42 U' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="0,9   5,9     2,9    2,9" fill="' +
        data[i].data.U +
        '" stroke="navy" stroke-width="0.2" id="U' +
        data[i].id +
        '" opacity="' +
        data[i].data.U +
        '" onclick="clickSvg(this);" class="ausente42 U' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="0,10   5,10     2,10    2,10" fill="' +
        data[i].data.U +
        '" stroke="navy" stroke-width="0.2" id="U' +
        data[i].id +
        '" opacity="' +
        data[i].data.U +
        '" onclick="clickSvg(this);" class="ausente42 U' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="0,11   5,11     4,11    4,11" fill="' +
        data[i].data.U +
        '" stroke="navy" stroke-width="0.2" id="U' +
        data[i].id +
        '" opacity="' +
        data[i].data.U +
        '" onclick="clickSvg(this);" class="ausente42 U' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="0,12   5,12     2,12    2,12" fill="' +
        data[i].data.U +
        '" stroke="navy" stroke-width="0.2" id="U' +
        data[i].id +
        '" opacity="' +
        data[i].data.U +
        '" onclick="clickSvg(this);" class="ausente42 U' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="0,13   5,13     3,13    3,13" fill="' +
        data[i].data.U +
        '" stroke="navy" stroke-width="0.2" id="U' +
        data[i].id +
        '" opacity="' +
        data[i].data.U +
        '" onclick="clickSvg(this);" class="ausente42 U' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="0,14   5,14     2,14    2,14" fill="' +
        data[i].data.U +
        '" stroke="navy" stroke-width="0.2" id="U' +
        data[i].id +
        '" opacity="' +
        data[i].data.U +
        '" onclick="clickSvg(this);" class="ausente42 U' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="0,15   5,15     2,15    2,15" fill="' +
        data[i].data.U +
        '" stroke="navy" stroke-width="0.2" id="U' +
        data[i].id +
        '" opacity="' +
        data[i].data.U +
        '" onclick="clickSvg(this);" class="ausente42 U' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="0,16   4,16     2,16    2,16" fill="' +
        data[i].data.U +
        '" stroke="navy" stroke-width="0.2" id="U' +
        data[i].id +
        '" opacity="' +
        data[i].data.U +
        '" onclick="clickSvg(this);" class="ausente42 U' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="0,17   3,17     2,17    2,17" fill="' +
        data[i].data.U +
        '" stroke="navy" stroke-width="0.2" id="U' +
        data[i].id +
        '" opacity="' +
        data[i].data.U +
        '" onclick="clickSvg(this);" class="ausente42 U' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="0,18   2,18     2,18    2,18" fill="' +
        data[i].data.U +
        '" stroke="navy" stroke-width="0.2" id="U' +
        data[i].id +
        '" opacity="' +
        data[i].data.U +
        '" onclick="clickSvg(this);" class="ausente42 U' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="18,2   20,2     20,2    20,2" fill="' +
        data[i].data.V +
        '" stroke="navy" stroke-width="0.1" id="V' +
        data[i].id +
        '" opacity="' +
        data[i].data.V +
        '" onclick="clickSvg(this);" class="ausente43 V' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="17,3   20,3     20,3    20,3" fill="' +
        data[i].data.V +
        '" stroke="navy" stroke-width="0.1" id="V' +
        data[i].id +
        '" opacity="' +
        data[i].data.V +
        '" onclick="clickSvg(this);" class="ausente43 V' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="16,4   20,4     20,4    20,4" fill="' +
        data[i].data.V +
        '" stroke="navy" stroke-width="0.1" id="V' +
        data[i].id +
        '" opacity="' +
        data[i].data.V +
        '" onclick="clickSvg(this);" class="ausente43 V' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="15,5   20,5     20,5    20,5" fill="' +
        data[i].data.V +
        '" stroke="navy" stroke-width="0.1" id="V' +
        data[i].id +
        '" opacity="' +
        data[i].data.V +
        '" onclick="clickSvg(this);" class="ausente43 V' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="15,6   20,6     20,6    20,6" fill="' +
        data[i].data.V +
        '" stroke="navy" stroke-width="0.1" id="V' +
        data[i].id +
        '" opacity="' +
        data[i].data.V +
        '" onclick="clickSvg(this);" class="ausente43 V' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="15,7   20,7     20,7    20,7" fill="' +
        data[i].data.V +
        '" stroke="navy" stroke-width="0.1" id="V' +
        data[i].id +
        '" opacity="' +
        data[i].data.V +
        '" onclick="clickSvg(this);" class="ausente43 V' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="15,8   20,8     20,8    20,8" fill="' +
        data[i].data.V +
        '" stroke="navy" stroke-width="0.1" id="V' +
        data[i].id +
        '" opacity="' +
        data[i].data.V +
        '" onclick="clickSvg(this);" class="ausente43 V' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="15,9   20,9     20,9    20,9" fill="' +
        data[i].data.V +
        '" stroke="navy" stroke-width="0.1" id="V' +
        data[i].id +
        '" opacity="' +
        data[i].data.V +
        '" onclick="clickSvg(this);" class="ausente43 V' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="15,10   20,10     20,10    20,10" fill="' +
        data[i].data.V +
        '" stroke="navy" stroke-width="0.1" id="V' +
        data[i].id +
        '" opacity="' +
        data[i].data.V +
        '" onclick="clickSvg(this);" class="ausente43 V' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="15,11   20,11     20,11    20,11" fill="' +
        data[i].data.V +
        '" stroke="navy" stroke-width="0.1" id="V' +
        data[i].id +
        '" opacity="' +
        data[i].data.V +
        '" onclick="clickSvg(this);" class="ausente43 V' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="15,12   20,12     20,12    20,12" fill="' +
        data[i].data.V +
        '" stroke="navy" stroke-width="0.1" id="V' +
        data[i].id +
        '" opacity="' +
        data[i].data.V +
        '" onclick="clickSvg(this);" class="ausente43 V' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="15,13   20,13     20,13    20,13" fill="' +
        data[i].data.V +
        '" stroke="navy" stroke-width="0.1" id="V' +
        data[i].id +
        '" opacity="' +
        data[i].data.V +
        '" onclick="clickSvg(this);" class="ausente43 V' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="15,14   20,14     20,14    20,14" fill="' +
        data[i].data.V +
        '" stroke="navy" stroke-width="0.1" id="V' +
        data[i].id +
        '" opacity="' +
        data[i].data.V +
        '" onclick="clickSvg(this);" class="ausente43 V' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="15,15   20,15     20,15    20,15" fill="' +
        data[i].data.V +
        '" stroke="navy" stroke-width="0.1" id="V' +
        data[i].id +
        '" opacity="' +
        data[i].data.V +
        '" onclick="clickSvg(this);" class="ausente43 V' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="16,16   20,16     20,16    20,16" fill="' +
        data[i].data.V +
        '" stroke="navy" stroke-width="0.1" id="V' +
        data[i].id +
        '" opacity="' +
        data[i].data.V +
        '" onclick="clickSvg(this);" class="ausente43 V' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="17,17   20,17     20,17    20,17" fill="' +
        data[i].data.V +
        '" stroke="navy" stroke-width="0.1" id="V' +
        data[i].id +
        '" opacity="' +
        data[i].data.V +
        '" onclick="clickSvg(this);" class="ausente43 V' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="18,18   20,18     20,18    20,18" fill="' +
        data[i].data.V +
        '" stroke="navy" stroke-width="0.1" id="V' +
        data[i].id +
        '" opacity="' +
        data[i].data.V +
        '" onclick="clickSvg(this);" class="ausente43 V' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="2,18   2,18     2,20    2,20" fill="' +
        data[i].data.M +
        '" stroke="navy" stroke-width="0.1" id="M' +
        data[i].id +
        '" opacity="' +
        data[i].data.M +
        '" onclick="clickSvg(this);" class="ausente4 M' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="3,17   3,17     3,20    3,20" fill="' +
        data[i].data.M +
        '" stroke="navy" stroke-width="0.1" id="M' +
        data[i].id +
        '" opacity="' +
        data[i].data.M +
        '" onclick="clickSvg(this);" class="ausente4 M' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="4,16   4,16     4,20    4,20" fill="' +
        data[i].data.M +
        '" stroke="navy" stroke-width="0.1" id="M' +
        data[i].id +
        '" opacity="' +
        data[i].data.M +
        '" onclick="clickSvg(this);" class="ausente4 M' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="5,15   5,15     5,15    5,20" fill="' +
        data[i].data.M +
        '" stroke="navy" stroke-width="0.1" id="M' +
        data[i].id +
        '" opacity="' +
        data[i].data.M +
        '" onclick="clickSvg(this);" class="ausente4 M' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="6,15   6,15     6,15    6,20" fill="' +
        data[i].data.M +
        '" stroke="navy" stroke-width="0.1" id="M' +
        data[i].id +
        '" opacity="' +
        data[i].data.M +
        '" onclick="clickSvg(this);" class="ausente4 M' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="7,15   7,15     7,15    7,20" fill="' +
        data[i].data.M +
        '" stroke="navy" stroke-width="0.1" id="M' +
        data[i].id +
        '" opacity="' +
        data[i].data.M +
        '" onclick="clickSvg(this);" class="ausente4 M' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="8,15   8,15     8,15    8,20" fill="' +
        data[i].data.M +
        '" stroke="navy" stroke-width="0.1" id="M' +
        data[i].id +
        '" opacity="' +
        data[i].data.M +
        '" onclick="clickSvg(this);" class="ausente4 M' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="9,15   9,15     9,15    9,20" fill="' +
        data[i].data.M +
        '" stroke="navy" stroke-width="0.1" id="M' +
        data[i].id +
        '" opacity="' +
        data[i].data.M +
        '" onclick="clickSvg(this);" class="ausente4 M' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="10,15   10,15     10,15    10,20" fill="' +
        data[i].data.M +
        '" stroke="navy" stroke-width="0.1" id="M' +
        data[i].id +
        '" opacity="' +
        data[i].data.M +
        '" onclick="clickSvg(this);" class="ausente4 M' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="11,15   11,15     11,15    11,20" fill="' +
        data[i].data.M +
        '" stroke="navy" stroke-width="0.1" id="M' +
        data[i].id +
        '" opacity="' +
        data[i].data.M +
        '" onclick="clickSvg(this);" class="ausente4 M' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="12,15   12,15     12,15    12,20" fill="' +
        data[i].data.M +
        '" stroke="navy" stroke-width="0.1" id="M' +
        data[i].id +
        '" opacity="' +
        data[i].data.M +
        '" onclick="clickSvg(this);" class="ausente4 M' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="13,15  13,15     13,15    13,20" fill="' +
        data[i].data.M +
        '"  stroke="navy" stroke-width="0.1" id="M' +
        data[i].id +
        '" opacity="' +
        data[i].data.M +
        '" onclick="clickSvg(this);" class="ausente4 M' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="14,15   14,15     14,15    14,20" fill="' +
        data[i].data.M +
        '" stroke="navy" stroke-width="0.1" id="M' +
        data[i].id +
        '" opacity="' +
        data[i].data.M +
        '" onclick="clickSvg(this);" class="ausente4 M' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="15,15   15,15     15,15    15,20" fill="' +
        data[i].data.M +
        '" stroke="navy" stroke-width="0.1" id="M' +
        data[i].id +
        '" opacity="' +
        data[i].data.M +
        '" onclick="clickSvg(this);" class="ausente4 M' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="16,16   16,16     16,20    16,20" fill="' +
        data[i].data.M +
        '" stroke="navy" stroke-width="0.1" id="M' +
        data[i].id +
        '" opacity="' +
        data[i].data.M +
        '" onclick="clickSvg(this);" class="ausente4 M' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="17,17   17,17     17,20    17,20" fill="' +
        data[i].data.M +
        '" stroke="navy" stroke-width="0.1" id="M' +
        data[i].id +
        '" opacity="' +
        data[i].data.M +
        '" onclick="clickSvg(this);" class="ausente4 M' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="18,18   18,18     18,20    18,20" fill="' +
        data[i].data.M +
        '" stroke="navy" stroke-width="0.1" id="M' +
        data[i].id +
        '" opacity="' +
        data[i].data.M +
        '" onclick="clickSvg(this);" class="ausente4 M' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="1,1   1,1     1,0    1,0" fill="' +
        data[i].data.TV +
        '" stroke="navy" stroke-width="0.1" id="TV' +
        data[i].id +
        '" opacity="' +
        data[i].data.TV +
        '" onclick="clickSvg(this);" class="ausente41 TV' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="2,2   2,2     2,0    2,0" fill="' +
        data[i].data.TV +
        '" stroke="navy" stroke-width="0.1" id="TV' +
        data[i].id +
        '" opacity="' +
        data[i].data.TV +
        '" onclick="clickSvg(this);" class="ausente41 TV' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="3,3   3,3     3,0    3,0" fill="' +
        data[i].data.TV +
        '" stroke="navy" stroke-width="0.1" id="TV' +
        data[i].id +
        '" opacity="' +
        data[i].data.TV +
        '" onclick="clickSvg(this);" class="ausente41 TV' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="4,4   4,4     4,0    4,0" fill="' +
        data[i].data.TV +
        '" stroke="navy" stroke-width="0.1" id="TV' +
        data[i].id +
        '" opacity="' +
        data[i].data.TV +
        '" onclick="clickSvg(this);" class="ausente41 TV' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="5,5   5,5     5,0    5,0" fill="' +
        data[i].data.TV +
        '" stroke="navy" stroke-width="0.1" id="TV' +
        data[i].id +
        '" opacity="' +
        data[i].data.TV +
        '" onclick="clickSvg(this);" class="ausente41 TV' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="6,5   6,5     6,0    6,0" fill="' +
        data[i].data.TV +
        '" stroke="navy" stroke-width="0.1" id="TV' +
        data[i].id +
        '" opacity="' +
        data[i].data.TV +
        '" onclick="clickSvg(this);" class="ausente41 TV' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="7,5   7,5     7,0    7,0" fill="' +
        data[i].data.TV +
        '" stroke="navy" stroke-width="0.1" id="TV' +
        data[i].id +
        '" opacity="' +
        data[i].data.TV +
        '" onclick="clickSvg(this);" class="ausente41 TV' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="8,5   8,5     8,0    8,0" fill="' +
        data[i].data.TV +
        '" stroke="navy" stroke-width="0.1" id="TV' +
        data[i].id +
        '" opacity="' +
        data[i].data.TV +
        '" onclick="clickSvg(this);" class="ausente41 TV' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="9,5   9,5     9,0    9,0" fill="' +
        data[i].data.TV +
        '" stroke="navy" stroke-width="0.1" id="TV' +
        data[i].id +
        '" opacity="' +
        data[i].data.TV +
        '" onclick="clickSvg(this);" class="ausente41 TV' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="10,5   10,5     10,0    10,0" fill="' +
        data[i].data.TV +
        '" stroke="navy" stroke-width="0.1" id="TV' +
        data[i].id +
        '" opacity="' +
        data[i].data.TV +
        '" onclick="clickSvg(this);" class="ausente41 TV' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="11,5   11,5     11,0    11,0" fill="' +
        data[i].data.TV +
        '" stroke="navy" stroke-width="0.1" id="TV' +
        data[i].id +
        '" opacity="' +
        data[i].data.TV +
        '" onclick="clickSvg(this);" class="ausente41 TV' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="12,5   12,5     12,0    12,0" fill="' +
        data[i].data.TV +
        '" stroke="navy" stroke-width="0.1" id="TV' +
        data[i].id +
        '" opacity="' +
        data[i].data.TV +
        '" onclick="clickSvg(this);" class="ausente41 TV' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="13,5   13,5     13,0    13,0" fill="' +
        data[i].data.TV +
        '" stroke="navy" stroke-width="0.1" id="TV' +
        data[i].id +
        '" opacity="' +
        data[i].data.TV +
        '" onclick="clickSvg(this);" class="ausente41 TV' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="14,5   14,5     14,0    14,0" fill="' +
        data[i].data.TV +
        '" stroke="navy" stroke-width="0.1" id="TV' +
        data[i].id +
        '" opacity="' +
        data[i].data.TV +
        '" onclick="clickSvg(this);" class="ausente41 TV' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="15,5   15,5     15,0    15,0" fill="' +
        data[i].data.TV +
        '" stroke="navy" stroke-width="0.1" id="TV' +
        data[i].id +
        '" opacity="' +
        data[i].data.TV +
        '" onclick="clickSvg(this);" class="ausente41 TV' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="16,4   16,4     16,0    16,0" fill="' +
        data[i].data.TV +
        '" stroke="navy" stroke-width="0.1" id="TV' +
        data[i].id +
        '" opacity="' +
        data[i].data.TV +
        '" onclick="clickSvg(this);" class="ausente41 TV' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="17,3   17,3     17,0    17,0" fill="' +
        data[i].data.TV +
        '" stroke="navy" stroke-width="0.1" id="TV' +
        data[i].id +
        '" opacity="' +
        data[i].data.TV +
        '" onclick="clickSvg(this);" class="ausente41 TV' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="18,2   18,2     18,0    18,0" fill="' +
        data[i].data.TV +
        '" stroke="navy" stroke-width="0.1" id="TV' +
        data[i].id +
        '" opacity="' +
        data[i].data.TV +
        '" onclick="clickSvg(this);" class="ausente41 TV' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="19,1   19,1     19,0    19,0" fill="' +
        data[i].data.TV +
        '" stroke="navy" stroke-width="0.1" id="TV' +
        data[i].id +
        '" opacity="' +
        data[i].data.TV +
        '" onclick="clickSvg(this);" class="ausente41 TV' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="5,5   5,5     5,0    5,0" fill="' +
        data[i].data.W +
        '" stroke="navy" stroke-width="0.5" id="W' +
        data[i].id +
        '" opacity="' +
        data[i].data.W_opacity +
        '" onclick="clickSvg(this);" class="ausente44 W' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="7,5   7,5     7,0    7,0" fill="' +
        data[i].data.W +
        '" stroke="navy" stroke-width="0.5" id="W' +
        data[i].id +
        '" opacity="' +
        data[i].data.W_opacity +
        '" onclick="clickSvg(this);" class="ausente44 W' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="9,5   9,5     9,0    9,0" fill="' +
        data[i].data.W +
        '" stroke="navy" stroke-width="0.5" id="W' +
        data[i].id +
        '" opacity="' +
        data[i].data.W_opacity +
        '" onclick="clickSvg(this);" class="ausente44 W' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="11,5   11,5     11,0    11,0" fill="' +
        data[i].data.W +
        '" stroke="navy" stroke-width="0.5" id="W' +
        data[i].id +
        '" opacity="' +
        data[i].data.W_opacity +
        '" onclick="clickSvg(this);" class="ausente44 W' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="13,5   13,5     13,0    13,0" fill="' +
        data[i].data.W +
        '" stroke="navy" stroke-width="0.5" id="W' +
        data[i].id +
        '" opacity="' +
        data[i].data.W_opacity +
        '" onclick="clickSvg(this);" class="ausente44 W' +
        data[i].id +
        '"></polygon>' +
        '<polygon points="15,5   15,5     15,0    15,0" fill="' +
        data[i].data.W +
        '" stroke="navy" stroke-width="0.5" id="W' +
        data[i].id +
        '" opacity="' +
        data[i].data.W_opacity +
        '" onclick="clickSvg(this);" class="ausente44 W' +
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
        '" onclick="clickSvg(this);" class="ausente45 XA' +
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
        '" onclick="clickSvg(this);" class="ausente46 XB' +
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
        '" onclick="clickSvg(this);" class="ausente47 XC' +
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
        '" onclick="clickSvg(this);" class="ausente48 XD' +
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
        '" onclick="clickSvg(this);" class="ausente49 XE' +
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
        '" onclick="clickSvg(this);" class="ausente50 XF' +
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
        '" onclick="clickSvg(this);" class="ausente51 XG' +
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
        '" onclick="clickSvg(this);" class="ausente52 XH' +
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
        '" onclick="clickSvg(this);" class="ausente53 XI' +
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
        '" onclick="clickSvg(this);" class="ausente54 XJ' +
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
        '" onclick="clickSvg(this);" class="ausente55 XK' +
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
        '" onclick="clickSvg(this);" class="ausente56 XL' +
        data[i].id +
        '"></polygon>' +
        // '<polygon points="1,0   1,0     1,19    1,20" fill="'+data[i].data.AB+'" stroke="navy" stroke-width="0.5" id="AB'+data[i].id+'" opacity="1" onclick="clickSvg(this);" class="ausente59 AB'+data[i].id+'"></polygon>'+
        '<polygon points="3,0   3,0     3,19    3,20" fill="' +
        data[i].data.AB +
        '" stroke="' +
        data[i].data.AB +
        '" stroke-width="0.5" id="AB' +
        data[i].id +
        '" opacity="' +
        data[i].data.AB_opacity +
        '" onclick="clickSvg(this);" class="ausente59 AB' +
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
        '" onclick="clickSvg(this);" class="ausente59 AB' +
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
        '" onclick="clickSvg(this);" class="ausente59 AB' +
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
        '" onclick="clickSvg(this);" class="ausente59 AB' +
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
        '" onclick="clickSvg(this);" class="ausente59 AB' +
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
        '" onclick="clickSvg(this);" class="ausente59 AB' +
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
        '" onclick="clickSvg(this);" class="ausente59 AB' +
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
        '" onclick="clickSvg(this);" class="ausente59 AB' +
        data[i].id +
        '"></polygon>' +
        // '<polygon points="5,20   5,20     5,20    11,30" fill="'+data[i].data.BA+'" stroke="navy" stroke-width="2" id="BA'+data[i].id+'" opacity="1" onclick="clickSvg(this);" class="ausente60 BA'+data[i].id+'"></polygon>'+
        '<polygon points="25,35   25,35     0,35    0,35" fill="' +
        data[i].data.BA +
        '" stroke="' +
        data[i].data.BA +
        '" stroke-width="2" id="BA' +
        data[i].id +
        '" opacity="' +
        data[i].data.BA_opacity +
        '" onclick="clickSvg(this);" class="ausente60 BA' +
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
        '" onclick="clickSvg(this);" class="ausente61 BB' +
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
        '" onclick="clickSvg(this);" class="ausente62 BC' +
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
        '" onclick="clickSvg(this);" class="ausente63 BD' +
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
        '" onclick="clickSvg(this);" class="ausente64 BE' +
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
        '" onclick="clickSvg(this);" class="ausente65 BF' +
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
        '" onclick="clickSvg(this);" class="ausente65 BF' +
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
        '" onclick="clickSvg(this);" class="ausente65 BF' +
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
        '" onclick="clickSvg(this);" class="ausente65 BF' +
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
        '" onclick="clickSvg(this);" class="ausente65 BF' +
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
        '" onclick="clickSvg(this);" class="ausente65 BF' +
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
        '" onclick="clickSvg(this);" class="ausente65 BF' +
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
        '" onclick="clickSvg(this);" class="ausente65 BF' +
        data[i].id +
        '"></polygon>' +
        '<text x="6" y="30" stroke="navy" fill="navy" stroke-width="0.1" style="font-size: 6pt;font-weight:normal">' +
        data[i].title +
        "</text>" +
        '<text id="keterangandental' +
        data[i].title +
        '" x="6" y="37" font-size="6pt">';
      "</text>" + "</g>";
    }

    var parser = new DOMParser();
    var doc = parser.parseFromString(svg, "image/svg+xml");
    // var baru = document.importNode(svg,true);
    document.getElementById("odontograma").appendChild(parseSVG(svg));
    // console.log("svg: " , doc);
    // $("#odontograma").append(svg);
  }
};

function updateJsonOdontograma(idSvg, idPolygon, color) {
  console.log("poligon", idPolygon);
  for (var i = 1; i < allDental.length; i++) {
    // for(var x = 1; x < allDental_clone.length; x++){
    // console.log('allDental',allDental[i].id);
    // console.log('allDental',allDental_clone[x].id);
    if (allDental[i].id === idSvg) {
      if (idPolygon === "C") {
        allDental[i].data.C = color;
      } else if (idPolygon === "T") {
        allDental[i].data.T = color;
      } else if (idPolygon === "B") {
        allDental[i].data.B = color;
      } else if (idPolygon === "R") {
        allDental[i].data.R = color;
      } else if (idPolygon === "L") {
        allDental[i].data.L = color;
      } else if (idPolygon === "F") {
        allDental[i].data.F = color;
      } else if (idPolygon === "G") {
        allDental[i].data.G = color;
      } else if (idPolygon === "H") {
        allDental[i].data.H = color;
      } else if (idPolygon === "I") {
        allDental[i].data.I = color;
        console.log("all", allDental[i].data.I);
      } else if (idPolygon === "J" + idSvg) {
        allDental[i].data.J = color;
        console.log("all", allDental[i].data.J);
      } else if (idPolygon === "K") {
        allDental[i].data.K = color;
      } else if (idPolygon === "M") {
        allDental[i].data.M = color;
      } else if (idPolygon === "N") {
        allDental[i].data.N = color;
      } else if (idPolygon === "O") {
        allDental[i].data.O = color;
      } else if (idPolygon === "P") {
        allDental[i].data.P = color;
      } else if (idPolygon === "Q") {
        allDental[i].data.Q = color;
      } else if (idPolygon === "R") {
        allDental[i].data.R = color;
      } else if (idPolygon === "S") {
        allDental[i].data.S = color;
      } else if (idPolygon === "T") {
        allDental[i].data.T = color;
      } else if (idPolygon === "U") {
        allDental[i].data.U = color;
      } else if (idPolygon === "V") {
        allDental[i].data.V = color;
      } else if (idPolygon === "W") {
        allDental[i].data.W = color;
      } else if (idPolygon === "X") {
        allDental[i].data.X = color;
      } else if (idPolygon === "XA") {
        allDental[i].data.XA = color;
      } else if (idPolygon === "XB") {
        allDental[i].data.XB = color;
      } else if (idPolygon === "XC") {
        allDental[i].data.XC = color;
      } else if (idPolygon === "XD") {
        allDental[i].data.XD = color;
      } else if (idPolygon === "XE") {
        allDental[i].data.XE = color;
      } else if (idPolygon === "XF") {
        allDental[i].data.XF = color;
      } else if (idPolygon === "XG") {
        allDental[i].data.XG = color;
      } else if (idPolygon === "XH") {
        allDental[i].data.XH = color;
      } else if (idPolygon === "XI") {
        allDental[i].data.XI = color;
      } else if (idPolygon === "XJ") {
        allDental[i].data.XJ = color;
      } else if (idPolygon === "XK") {
        allDental[i].data.XK = color;
      } else if (idPolygon === "XL") {
        allDental[i].data.XL = color;
      }

      // console.log(allDental[i]);
    }

    //}
  }
}

var arraySambung = [];

function getPosition(event) {
  var x = event.x;
  var y = event.y;

  var arraySambung = [];
  var tidakAdaGigi = $(this).parent().children().first().text();
  console.log("tidakAdaGigi", tidakAdaGigi);
  var kuadran = $(this).parent().attr("id");
  console.log("kuadran", kuadran);

  var left = 0,
    width = 0;

  console.log("arrayPuente.length", arraySambung.length);

  if (arraySambung.length < 1) {
    arraySambung.push({
      gigi: tidakAdaGigi,
      kuadran: kuadran,
      left: $(this)[0].offsetLeft,
      father: null,
    });

    //console.log('push', push);
  } else {
    arraySambung.push({
      gigi: tidakAdaGigi,
      kuadran: kuadran,
      left: $(this)[0].offsetLeft,
      father: arrayPuente[0].diente,
    });
    var diferencia = Math.abs(
      parseInt(arraySambung[1].kuadran) - parseInt(arraySambung[1].father)
    );
    console.log("diferencia", diferencia);
  }
}

function zoom() {
  console.log("control");
  document.body.style.cursor = "-webkit-zoom-in";
}

function defaulton() {
  document.body.style.cursor = "default";
}

function clickSvg(x) {
  var control = $("#controls").children().find(".active").attr("id");
  var control2 = $("#controls2").children().find(".active").attr("id");
  var control3 = $("#controls3").children().find(".active").attr("id");

  var idSvg = $(x).parent().attr("id");

  var idPolygon = $(x).attr("id");

  var Svgout = $(x).parent();

  switch (control) {
    case "kariesSuperfisia2":
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
          for (var i = 0; i < allDental.length; i++) {
            if (allDental[i].id === idSvg) {
              allDental[i].data.J = "black";
              allDental[i].data.J_opacity = "1";
            }
          }

          var classe = document.querySelector("#kariesSuperfisia2");
          if (classe) {
            classe.removeAttribute("class", "active");
            classe.setAttribute("class", "btn list-group-item");
          }
        });
      break;
    case "kariesSuperfisia11":
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
          for (var i = 0; i < allDental.length; i++) {
            if (allDental[i].id === idSvg) {
              allDental[i].data.H = "black";
              allDental[i].data.H_opacity = "1";
            }
          }

          var classe = document.querySelector("#kariesSuperfisia11");
          if (classe) {
            classe.removeAttribute("class", "active");
            classe.setAttribute("class", "btn list-group-item");
          }
        });

      break;
    case "kariesSuperfisia4":
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

          for (var i = 0; i < allDental.length; i++) {
            if (allDental[i].id === idSvg) {
              allDental[i].data.N = "tomato";
              allDental[i].data.N_opacity = "1";
            }
          }

          var classe = document.querySelector("#kariesSuperfisia4");
          if (classe) {
            classe.removeAttribute("class", "active");
            classe.setAttribute("class", "btn list-group-item");
          }
        });
      break;
    case "kariesSuperfisia3":
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

          for (var i = 0; i < allDental.length; i++) {
            if (allDental[i].id === idSvg) {
              allDental[i].data.M = "1";
            }
          }
          var classe = document.querySelector("#kariesSuperfisia3");
          if (classe) {
            classe.removeAttribute("class", "active");
            classe.setAttribute("class", "btn list-group-item");
          }
        });

      break;
    case "kariesSuperfisia12":
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

          for (var i = 0; i < allDental.length; i++) {
            if (allDental[i].id === idSvg) {
              allDental[i].data.TV = "1";
            }
          }

          var classe = document.querySelector("#kariesSuperfisia12");
          if (classe) {
            classe.removeAttribute("class", "active");
            classe.setAttribute("class", "btn list-group-item");
          }
        });
      break;
    case "kariesSuperfisia13":
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

          for (var i = 0; i < allDental.length; i++) {
            if (allDental[i].id === idSvg) {
              allDental[i].data.U = "1";
            }
          }

          var classe = document.querySelector("#kariesSuperfisia13");
          if (classe) {
            classe.removeAttribute("class", "active");
            classe.setAttribute("class", "btn list-group-item");
          }
        });
      break;
    case "kariesSuperfisia14":
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

          for (var i = 0; i < allDental.length; i++) {
            if (allDental[i].id === idSvg) {
              allDental[i].data.V = "1";
            }
          }

          var classe = document.querySelector("#kariesSuperfisia14");
          if (classe) {
            classe.removeAttribute("class", "active");
            classe.setAttribute("class", "btn list-group-item");
          }
        });
      break;
    case "kariesSuperfisia5":
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
            for (var i = 0; i < allDental.length; i++) {
              if (allDental[i].id === idSvg) {
                allDental[i].data.XA = "black";
                allDental[i].data.XA_opacity = "1";
              }
            }

            var classe = document.querySelector("#kariesSuperfisia5");
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
            for (var i = 0; i < allDental.length; i++) {
              if (allDental[i].id === idSvg) {
                allDental[i].data.XB = "black";
                allDental[i].data.XB_opacity = "1";
              }
            }
            var classe = document.querySelector("#kariesSuperfisia5");
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
            for (var i = 0; i < allDental.length; i++) {
              if (allDental[i].id === idSvg) {
                allDental[i].data.XC = "black";
                allDental[i].data.XC_opacity = "1";
              }
            }
            var classe = document.querySelector("#kariesSuperfisia5");
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
            for (var i = 0; i < allDental.length; i++) {
              if (allDental[i].id === idSvg) {
                allDental[i].data.XC = "black";
                allDental[i].data.XC_opacity = "1";
              }
            }
            var classe = document.querySelector("#kariesSuperfisia5");
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
            for (var i = 0; i < allDental.length; i++) {
              if (allDental[i].id === idSvg) {
                allDental[i].data.XE = "black";
                allDental[i].data.XE_opacity = "1";
              }
            }
            var classe = document.querySelector("#kariesSuperfisia5");
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
            for (var i = 0; i < allDental.length; i++) {
              if (allDental[i].id === idSvg) {
                allDental[i].data.XF = "black";
                allDental[i].data.XF_opacity = "1";
              }
            }
            var classe = document.querySelector("#kariesSuperfisia5");
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
            for (var i = 0; i < allDental.length; i++) {
              if (allDental[i].id === idSvg) {
                allDental[i].data.XG = "black";
                allDental[i].data.XG_opacity = "1";
              }
            }
            var classe = document.querySelector("#kariesSuperfisia5");
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
            for (var i = 0; i < allDental.length; i++) {
              if (allDental[i].id === idSvg) {
                allDental[i].data.XH = "black";
                allDental[i].data.XH_opacity = "1";
              }
            }
            var classe = document.querySelector("#kariesSuperfisia5");
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
            for (var i = 0; i < allDental.length; i++) {
              if (allDental[i].id === idSvg) {
                allDental[i].data.XI = "black";
                allDental[i].data.XI_opacity = "1";
              }
            }
            var classe = document.querySelector("#kariesSuperfisia5");
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
            for (var i = 0; i < allDental.length; i++) {
              if (allDental[i].id === idSvg) {
                allDental[i].data.XJ = "black";
                allDental[i].data.XJ_opacity = "1";
              }
            }
            var classe = document.querySelector("#kariesSuperfisia5");
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
            for (var i = 0; i < allDental.length; i++) {
              if (allDental[i].id === idSvg) {
                allDental[i].data.XK = "black";
                allDental[i].data.XK_opacity = "1";
              }
            }
            var classe = document.querySelector("#kariesSuperfisia5");
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
            for (var i = 0; i < allDental.length; i++) {
              if (allDental[i].id === idSvg) {
                allDental[i].data.XL = "black";
                allDental[i].data.XL_opacity = "1";
              }
            }
            var classe = document.querySelector("#kariesSuperfisia5");
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
            for (var i = 0; i < allDental.length; i++) {
              if (allDental[i].id === idSvg) {
                allDental[i].data.XM = "black";
                allDental[i].data.XM_opacity = "1";
              }
            }
            var classe = document.querySelector("#kariesSuperfisia5");
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
            for (var i = 0; i < allDental.length; i++) {
              if (allDental[i].id === idSvg) {
                allDental[i].data.XN = "black";
                allDental[i].data.XN_opacity = "1";
              }
            }
            var classe = document.querySelector("#kariesSuperfisia5");
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
            for (var i = 0; i < allDental.length; i++) {
              if (allDental[i].id === idSvg) {
                allDental[i].data.XO = "black";
                allDental[i].data.XO_opacity = "1";
              }
            }
            var classe = document.querySelector("#kariesSuperfisia5");
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
            for (var i = 0; i < allDental.length; i++) {
              if (allDental[i].id === idSvg) {
                allDental[i].data.XP = "black";
                allDental[i].data.XP_opacity = "1";
              }
            }
            var classe = document.querySelector("#kariesSuperfisia5");
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
            for (var i = 0; i < allDental.length; i++) {
              if (allDental[i].id === idSvg) {
                allDental[i].data.XQ = "black";
                allDental[i].data.XQ_opacity = "1";
              }
            }
            var classe = document.querySelector("#kariesSuperfisia5");
            if (classe) {
              classe.removeAttribute("class", "active");
              classe.setAttribute("class", "btn list-group-item");
            }
          });
      }

      break;

    case "kariesSuperfisia6":
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
          for (var i = 0; i < allDental.length; i++) {
            if (allDental[i].id === idSvg) {
              allDental[i].data.O = "black";
              allDental[i].data.O_opacity = "1";
            }
          }
          var classe = document.querySelector("#kariesSuperfisia6");
          if (classe) {
            classe.removeAttribute("class", "active");
            classe.setAttribute("class", "btn list-group-item");
          }
        });
      break;
    case "kariesSuperfisia7":
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
          for (var i = 0; i < allDental.length; i++) {
            if (allDental[i].id === idSvg) {
              allDental[i].data.P = "black";
              allDental[i].data.P_opacity = "1";
            }
          }
          var classe = document.querySelector("#kariesSuperfisia7");
          if (classe) {
            classe.removeAttribute("class", "active");
            classe.setAttribute("class", "btn list-group-item");
          }
        });
      break;
    case "kariesSuperfisia8":
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
          for (var i = 0; i < allDental.length; i++) {
            if (allDental[i].id === idSvg) {
              allDental[i].data.Q = "black";
              allDental[i].data.Q_opacity = "1";
            }
          }
          var classe = document.querySelector("#kariesSuperfisia8");
          if (classe) {
            classe.removeAttribute("class", "active");
            classe.setAttribute("class", "btn list-group-item");
          }
        });
      break;
    case "kariesSuperfisia9":
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
          for (var i = 0; i < allDental.length; i++) {
            if (allDental[i].id === idSvg) {
              allDental[i].data.R = "black";
              allDental[i].data.R_opacity = "1";
            }
          }
          var classe = document.querySelector("#kariesSuperfisia9");
          if (classe) {
            classe.removeAttribute("class", "active");
            classe.setAttribute("class", "btn list-group-item");
          }
        });
      break;

    case "kariesSuperfisia10":
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
          for (var i = 0; i < allDental.length; i++) {
            if (allDental[i].id === idSvg) {
              allDental[i].data.S = "black";
              allDental[i].data.S_opacity = "1";
            }
          }
          var classe = document.querySelector("#kariesSuperfisia10");
          if (classe) {
            classe.removeAttribute("class", "active");
            classe.setAttribute("class", "btn list-group-item");
          }
        });
      break;
    case "kariesSuperfisia":
      console.log("klik");
      // $("#kariesSuperfisia").click(function(){
      //     console.log('klik');
      //     document.body.style.cursor = 'wait';
      // });
      $("#" + idSvg + "").click(function () {
        var textnode = document.getElementById(idSvg);

        var parent = document.getElementById("parentDiv");
        var childs = parent.childNodes;
        var item = childs[1];
        var childs2 = item.childNodes;
        var item2 = childs2[0];

        item.replaceChild(textnode, item2);

        // var itm = document.getElementById(idSvg);
        // var cln = itm.cloneNode(true);
        // var e = document.querySelector("#"+idSvg+"");
        // if (e) {
        //     e.removeAttribute('transform');
        // }
        // document.getElementById("odontograma").appendChild(cln);
        // var class_1 = document.querySelector("#kariesSuperfisia");
        // if (class_1) {
        //     class_1.removeAttribute('class','active');
        //     class_1.setAttribute("class","btn list-group-item");
        // }
      });
      break;
    case "sambung":
      //console.log($(this)[0].offsetLeft);
      console.log("hem");
      console.log("idsvg", idSvg);
      $("#" + idSvg + "").click(function () {
        console.log("this", this);
        var tanpaGigi = $(this).parent().children().first().text();
        console.log("tanpaGigi", tanpaGigi);
        var filter = idSvg.slice(6, 8);
        console.log("filter", filter);
        var kuadran = $(this).parent().attr("id");
        console.log("kuadran", kuadran);

        var left = 0,
          width = 0;
        console.log(arraySambung.length);
        if (arraySambung.length < 1) {
          console.log("iki", $(this).parent().children(".ausente"));
          //  $(this).parent().children('.ausente').css('stroke', 'red');
          var idPolygon2 = $(this).attr("class");
          $(x)
            .parent()
            .find(".ausente7")
            .each(function () {
              var idSvg2 = $(this).attr("id");
              var e = document.querySelector("." + idSvg2 + "");
              if (e) {
                e.removeAttribute("class");
                e.setAttribute("style", "stroke:red;");
              }
            });

          arraySambung.push({
            diente: filter,
            cuadrante: kuadran,
            left: $(this)[0].offsetLeft,
            father: null,
          });
        } else {
          console.log("dua");
          $(x)
            .parent()
            .find(".ausente7")
            .each(function () {
              var idSvg2 = $(this).attr("id");
              var e = document.querySelector("." + idSvg2 + "");
              if (e) {
                e.removeAttribute("class");
                e.setAttribute("style", "stroke:red;");
              }
            });
          arraySambung.push({
            diente: filter,
            cuadrante: kuadran,
            left: $(this)[0].offsetLeft,
            father: arraySambung[0].diente,
          });

          let i = parseInt(arraySambung[0].diente) + 1;
          while (i < parseInt(arraySambung[1].diente)) {
            $(x)
              .parent()
              .find(".ausente")
              .each(function () {
                var e = document.querySelector(".Hdental" + i + "");
                if (e) {
                  e.removeAttribute("class");
                  e.setAttribute("class", "marcadoBlack");
                }
              });

            i = i + 1;
          }
          var diferencia = Math.abs(
            parseInt(arraySambung[1].diente) - parseInt(arraySambung[1].father)
          );
          console.log("diferencia", diferencia);
          if (diferencia == 1) width = diferencia * 60;
          else width = diferencia * 50;

          if (arraySambung[0].cuadrante == arraySambung[1].cuadrante) {
            if (arraySambung[0].cuadrante == "odontogram") {
              if (arraySambung[0].diente > arraySambung[1].diente) {
                console.log(arraySambung[0]);
                leftPX = parseInt(arraySambung[0].left) + 10 + "px";
              } else {
                leftPX = parseInt(arraySambung[1].left) + 10 + "px";
                //leftPX = "45px";
              }
            } else {
              if (arraySambung[0].diente < arraySambung[1].diente) {
                leftPX = "-45px";
              } else {
                leftPX = "45px";
              }
            }
          }
          console.log(leftPX);

          $(this)
            .parent()
            .append(
              '<g transform="translate(0,120)" style="z-index: 9999; height: 5px; width:' +
                width +
                'px;" id="sambung" class="click-red" style="background-color: red !important;"><text x="6" y="40" stroke="navy" fill="navy" stroke-width="0.1" style="font-size: 6pt;font-weight:normal">sambung</text></g>'
            );
          $(this).parent().children().last().css({
            position: "absolute",
            top: "80px",
            left: leftPX,
          });
        }
      });
      break;
    case "karangGigi":
      if ($(x).attr("fill").toLowerCase() === "#191970") {
        $(x).attr("fill", "white");
        updateJsonOdontograma(idSvg, idPolygon, "white");
      } else {
        $(x).attr("fill", "#191970");
        updateJsonOdontograma(idSvg, idPolygon, "#191970");
      }
      break;
    default:
      console.log("borrar case");
  }

  switch (control2) {
    case "sambung":
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
              for (var i = 0; i < allDental.length; i++) {
                if (allDental[i].id === idSvg) {
                  allDental[i].data.BA = "black";
                  allDental[i].data.BA_opacity = "1";
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
              for (var i = 0; i < allDental.length; i++) {
                if (allDental[i].id === idSvg) {
                  allDental[i].data.P = "black";
                  allDental[i].data.P_opacity = "1";
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
              for (var i = 0; i < allDental.length; i++) {
                if (allDental[i].id === idSvg) {
                  allDental[i].data.BC = "black";
                  allDental[i].data.BC_opacity = "1";
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
                for (var j = 0; j < allDental.length; j++) {
                  if (allDental[j].id === "dental" + i + "") {
                    console.log("dental" + j);
                    //console.log('dental',  allDental[i].id);
                    allDental[j].data.H = "black";
                    allDental[j].data.H_opacity = "1";
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
                for (var j = 0; j < allDental.length; j++) {
                  if (allDental[j].id === "dental" + i + "") {
                    console.log("dental" + j);
                    //console.log('dental',  allDental[i].id);
                    allDental[j].data.BB = "black";
                    allDental[j].data.BB_opacity = "1";
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
                for (var j = 0; j < allDental.length; j++) {
                  if (allDental[j].id === "dental" + i + "") {
                    console.log("dental" + j);
                    //console.log('dental',  allDental[i].id);
                    allDental[j].data.P = "black";
                    allDental[j].data.P_opacity = "1";
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
              for (var i = 0; i < allDental.length; i++) {
                if (allDental[i].id === idSvg) {
                  allDental[i].data.P = "black";
                  allDental[i].data.P_opacity = "1";
                }
              }

              var classe = document.querySelector("#sambung");
              if (classe) {
                classe.removeAttribute("class", "active");
                classe.setAttribute("class", "btn list-group-item");
              }
              arraySambung = [];
            });
        }
      });
      break;
    case "porcelain":
      // $(x).parent().find('.ausente7').each(function(){
      var class_1 = document.querySelector("#kariesSuperfisia2");
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
              for (var i = 0; i < allDental.length; i++) {
                if (allDental[i].id === idSvg) {
                  allDental[i].data.AB = "black";
                  allDental[i].data.AB_opacity = "1";
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
              for (var i = 0; i < allDental.length; i++) {
                if (allDental[i].id === idSvg) {
                  allDental[i].data.BA = "black";
                  allDental[i].data.BA_opacity = "1";
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
              for (var i = 0; i < allDental.length; i++) {
                if (allDental[i].id === idSvg) {
                  allDental[i].data.P = "black";
                  allDental[i].data.P_opacity = "1";
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
              for (var i = 0; i < allDental.length; i++) {
                if (allDental[i].id === idSvg) {
                  allDental[i].data.AB = "black";
                  allDental[i].data.AB_opacity = "1";
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
              for (var i = 0; i < allDental.length; i++) {
                console.log("svg4", idSvg4);
                console.log("svg", idSvg);
                if (allDental[i].id === idSvg) {
                  console.log("svg4ne", idSvg);
                  allDental[i].data.BC = "black";
                  allDental[i].data.BC_opacity = "1";
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
                for (var j = 0; j < allDental.length; j++) {
                  if (allDental[j].id === "dental" + i + "") {
                    //   console.log("dental"+j);
                    //console.log('dental',  allDental[i].id);
                    allDental[j].data.H = "black";
                    allDental[j].data.H_opacity = "1";
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
                for (var j = 0; j < allDental.length; j++) {
                  if (allDental[j].id === "dental" + i + "") {
                    // console.log("dental"+j);
                    //console.log('dental',  allDental[i].id);
                    allDental[j].data.BF = "black";
                    allDental[j].data.BF_opacity = "1";
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
                for (var j = 0; j < allDental.length; j++) {
                  if (allDental[j].id === "dental" + i + "") {
                    //console.log("dental"+j);
                    //console.log('dental',  allDental[i].id);
                    allDental[j].data.BB = "black";
                    allDental[j].data.BB_opacity = "1";
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
                for (var j = 0; j < allDental.length; j++) {
                  if (allDental[j].id === "dental" + i + "") {
                    //console.log("dental"+j);
                    //console.log('dental',  allDental[i].id);
                    allDental[j].data.P = "black";
                    allDental[j].data.P_opacity = "1";
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
              for (var i = 0; i < allDental.length; i++) {
                if (allDental[i].id === idSvg) {
                  allDental[i].data.P = "black";
                  allDental[i].data.P_opacity = "1";
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

              var classe = document.querySelector("#porcelain");
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
  console.log(id_pemeriksaan + "Ini id pemeriksaan");
  // $.ajax({
  //   url: link + "Doctor/ajax_add_temp",
  //   type: "POST",
  //   dataType: "json",
  //   data: {
  //     idSvg: idSvg,
  //     id_pemeriksaan: id_pemeriksaan,
  //     control: control,
  //     session_id: session_id,
  //   },
  //   async: true,
  //   success: function (response) {
  //     //    $("#loading").modal('hide');
  //     if (response.status) {
  //       console.log("berhasil");
  //     } else {
  //       console.log("gagal");
  //     }

  //     $.ajax({
  //       url:
  //         link +
  //         "Doctor/ajax_id_svg/" +
  //         idSvg +
  //         "/" +
  //         id_pemeriksaan +
  //         "/" +
  //         session_id,
  //       type: "GET",
  //       dataType: "JSON",
  //       success: function (result) {
  //         console.log("result", result);
  //         if (result == 1) {
  //           $(x)
  //             .parent()
  //             .parent()
  //             .find("." + idSvg)
  //             .each(function () {
  //               var svgNS = "http://www.w3.org/2000/svg";
  //               var newText = document.createElementNS(svgNS, "text");
  //               newText.setAttributeNS(null, "x", "6");
  //               newText.setAttributeNS(null, "y", "37");
  //               newText.setAttributeNS(null, "font-size", "6pt");

  //               var textNode = document.createTextNode(control);
  //               newText.appendChild(textNode);
  //               document.getElementById(idSvg).appendChild(newText);

  //               for (var i = 0; i < allDental.length; i++) {
  //                 if (allDental[i].id === idSvg) {
  //                   allDental[i].title_2 = control;
  //                 }
  //               }
  //               var classe = document.querySelector("#" + keterangan_gigi);
  //               if (classe) {
  //                 classe.removeAttribute("class", "active");
  //                 classe.setAttribute("class", "btn list-group-item");
  //               }
  //               //arrayKeterangan = [];
  //             });
  //         } else if (result == 2) {
  //           $(x)
  //             .parent()
  //             .parent()
  //             .find("." + idSvg)
  //             .each(function () {
  //               var svgNS = "http://www.w3.org/2000/svg";
  //               var newText = document.createElementNS(svgNS, "text");
  //               newText.setAttributeNS(null, "x", "6");
  //               newText.setAttributeNS(null, "y", "43");
  //               newText.setAttributeNS(null, "font-size", "6pt");

  //               var textNode = document.createTextNode(control);
  //               newText.appendChild(textNode);
  //               document.getElementById(idSvg).appendChild(newText);

  //               for (var i = 0; i < allDental.length; i++) {
  //                 if (allDental[i].id === idSvg) {
  //                   allDental[i].title_3 = control;
  //                 }
  //               }
  //               var classe = document.querySelector("#" + keterangan_gigi);
  //               if (classe) {
  //                 classe.removeAttribute("class", "active");
  //                 classe.setAttribute("class", "btn list-group-item");
  //               }

  //               //arrayKeterangan = [];
  //             });
  //         } else if (result == 3) {
  //           $(x)
  //             .parent()
  //             .parent()
  //             .find("." + idSvg)
  //             .each(function () {
  //               var svgNS = "http://www.w3.org/2000/svg";
  //               var newText = document.createElementNS(svgNS, "text");
  //               newText.setAttributeNS(null, "x", "6");
  //               newText.setAttributeNS(null, "y", "49");
  //               newText.setAttributeNS(null, "font-size", "6pt");

  //               var textNode = document.createTextNode(control);
  //               newText.appendChild(textNode);
  //               document.getElementById(idSvg).appendChild(newText);

  //               for (var i = 0; i < allDental.length; i++) {
  //                 if (allDental[i].id === idSvg) {
  //                   allDental[i].title_4 = control;
  //                 }
  //               }
  //               var classe = document.querySelector("#" + keterangan_gigi);
  //               if (classe) {
  //                 classe.removeAttribute("class", "active");
  //                 classe.setAttribute("class", "btn list-group-item");
  //               }
  //               //arrayKeterangan = [];
  //             });
  //         }
  //       },
  //     });
  //   },
  // });
}

function objectFindByKey(array, key, value, filter, yne, control) {
  for (var i = 0; i < array.length; i++) {
    if (array[i][key] === value) {
      return array.length[i];
    }
  }
  return null;
}

function limpiarLados(objeto) {
  $(objeto)
    .parent()
    .find("polygon")
    .each(function () {
      if ($(this).attr("value") < 6) {
        $(this).attr({ class: "diente", estado: 0 });
      }
    });
}

function quitarEspecial(objeto) {
  $(objeto)
    .parent()
    .find("polygon")
    .each(function () {
      if ($(this).attr("value") >= 6 && $(this).attr("value") <= 7) {
        $(this).attr("class", "ausente");
      } else if ($(this).attr("value") == 10) {
        $(this).attr("class", "implante");
      }
    });
  $(objeto)
    .parent()
    .find("circle")
    .each(function () {
      if ($(this).attr("value") == 8) {
        $(this).attr("class", "corona");
      } else if ($(this).attr("value") == 9) {
        $(this).attr("class", "endodoncia");
      }
    });
}

// $('#non').click(function(){
//     //do something
//     let non;
//     non = 'non';
//     $('#line').append(non);
// });

function clickLine(x) {
  console.log("x", x);
}

function saveHeaderRawat(button) {
  url = base_url + "Doctor/create_action_periksa";
  var nama_lengkap = $("#nama_depan").val();
  $.ajax({
    type: "POST",

    url: url,

    cache: false,

    data:
      $("#formRawatTambah").serialize() +
      "&odontogram=" +
      JSON.stringify(allDentalAfter),

    success: function (json) {
      ///var obj = JSON.parse(json);

      // console.log('berhasil');
      // window.location = base_url+"Doctor.html";
      swal({
        title: "Berhasil!",
        html:
          "Perawatan Pasien atas nama " +
          nama_lengkap +
          " telah selesai. Seluruh data telah terekam dalam Summary Rekam Medis pasien terkait",
        type: "success",
        confirmButtonColor: "#ff0055",
        confirmButtonText: "Kembali Ke Halaman Awal",
      }).then((result) => {
        if (result.value) {
          //this is your success swal, after clicking the yes button, it will reload or go to the other page.
          location.reload(); // this is your location reload.
          window.location.href = base_url + "Doctor.html"; // this is your relocate to other page.
        }
      });
    },
    error: function (jqXHR, textStatus, errorThrown) {
      console.log("gagal");
    },
  });
}

function load_odontogram() {
  let tgl_awal = $("#tgl_awal").val();
  //let tgl_akhir = $('#tgl_akhir').val();
  let id_pasien = $("#id_pasien").val();
  document.getElementById("odontogram_utama").style.display = "none";
  $("#kota").html(
    "<img style='display: block; margin: 0 auto; text-align: center; ' src='" +
      base_url +
      "assets/img/loader-dark.gif'>"
  );

  $.get(
    "" + base_url + "Doctor/create_load",
    { tgl_awal: tgl_awal, id_pasien: id_pasien },
    function (data) {
      $("#kota").html(data);
    }
  );
}

function save_temp() {
  url = base_url + "Doctor/create_odontogram_periksa";
  $.ajax({
    type: "POST",

    url: url,

    cache: false,

    data:
      $("#formRawatTambah").serialize() +
      "&odontogram=" +
      JSON.stringify(allDental),

    success: function (json) {
      ///var obj = JSON.parse(json);
      // let check_jumlah = getcheckjumlah(id_pemeriksaan, id_pasien, date_awal);
      console.log("berhasil");
      // TODO coba sampe sini terakhir
      let check_jumlah = getcheckjumlah(id_pemeriksaan, id_pasien2, date);

      if (check_jumlah > 0) {
        var data = JSON.parse(odontogramDataUtama2);
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
      for (var i = 0; i < data.length; i++) {
        $.ajax({
          type: "GET",
          url: link + `doctor/getTemp/dental${data[i].title}/${id_pemeriksaan}`,
          dataType: "json",
          success: (hasil) => {
            console.log(hasil.ket_pemeriksaan + "Hanya testing untuk after");
            console.log("keteranganafter" + hasil.idSvg);
            document.getElementById("keteranganafter" + hasil.idSvg).innerHTML =
              hasil.ket_pemeriksaan;
          },
        });
      }
    },
    error: function (jqXHR, textStatus, errorThrown) {
      console.log("gagal");
    },
  });
}

let dataCheckData = [];
function getCheckDataFromServer() {
  $.ajax({
    async: false,
    url: link2 + "Doctor/ajax_check_id/",
    type: "GET",
    dataType: "JSON",
    success: function (data) {
      dataCheckData = data.sort(function (a, b) {
        return (
          a.id_rekam_medis - b.id_rekam_medis ||
          b.id_pasien - a.id_pasien ||
          b.tgl_pemeriksaan - a.tgl_pemeriksaan
        );
      });
    },
  });
}

function getcheckjumlah(id_pemeriksaan2, id_pasien2, date) {
  let datacheckdata = dataCheckData.filter((v) => {
    return (
      v.id_rekam_medis == id_pemeriksaan2 &&
      v.id_pasien == id_pasien2 &&
      v.tgl_pemeriksaan == date
    );
  });
  // console.log(datacheckdata, 'datacheckdata')
  // console.log(datacheckdata.length, 'datacheckdata.length')
  // odontogram_after();
  return datacheckdata.length;
}
