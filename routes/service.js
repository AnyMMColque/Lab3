import express from"express";
import ServicesController from "../controller/ServicesController.js";
var services=newServicesController();
router.get("/",services.index);
export default router;
