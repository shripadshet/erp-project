import { useState, useEffect } from "react";
import { Tabs, Tab } from "@mui/material";
import StoreIndex from "../../containers/indeces/inventoryMaster/StoreIndex";
import MeasureIndex from "../../containers/indeces/inventoryMaster/MeasureIndex";
import VendorIndex from "../../containers/indeces/inventoryMaster/VendorIndex";
import useBreadcrumbs from "../../hooks/useBreadcrumbs";
import { useNavigate, useLocation } from "react-router-dom";

function InventoryMaster() {
  const [tab, setTab] = useState("Stores");
  const setCrumbs = useBreadcrumbs();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => setCrumbs([{ name: "Inventory Master" }]));

  useEffect(() => {
    if (pathname.toLowerCase().includes("/stores")) setTab("Stores");
    else if (pathname.toLowerCase().includes("/measures")) setTab("Measures");
    else if (pathname.toLowerCase().includes("/vendor")) setTab("Vendor");
  }, [pathname]);

  const handleChange = (e, newValue) => {
    navigate("/InventoryMaster/" + newValue);
  };

  return (
    <>
      <Tabs value={tab} onChange={handleChange}>
        <Tab value="Stores" label="Stores" />
        <Tab value="Measures" label="Measures" />
        <Tab value="Vendor" label="Vendor" />
      </Tabs>
      {tab === "Stores" && <StoreIndex />}
      {tab === "Measures" && <MeasureIndex />}
      {tab === "Vendor" && <VendorIndex />}
    </>
  );
}

export default InventoryMaster;
