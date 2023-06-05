declare namespace Components {
    namespace Schemas {
        export interface Comment {
            id?: string; // uuid
            createdDate?: string; // date-time
            modifiedDate?: string; // date-time
            userId?: string; // uuid
            tagDataId?: string; // uuid
            text?: string | null;
            property?: string | null;
            commentLevel?: CommentLevel /* int32 */;
        }
        export type CommentLevel = 0 | 1 | 2; // int32
        export interface Contract {
            tags?: string[] | null;
        }
        export interface DatasheetDto {
            id?: string; // uuid
            projectId?: string; // uuid
            tagNo?: string | null;
            description?: string | null;
            category?: string | null;
            area?: string | null;
            dicipline?: string | null;
            purchaserRequirement?: PurchaserRequirement;
            supplierOfferedProduct?: SupplierOfferedProduct;
            electricalPurchaserRequirement?: ElectricalPurchaserRequirement;
            electricalSupplierOfferedProduct?: ElectricalSupplierOfferedProduct;
            mechanicalPurchaserRequirement?: MechanicalPurchaserRequirement;
            mechanicalSupplierOfferedProduct?: MechanicalSupplierOfferedProduct;
        }
        export interface ElectricalPurchaserRequirement {
            orderStatus?: string | null;
            tagNumber?: string | null;
            tagDescription?: string | null;
            clientName?: string | null;
            siteOrLocation?: string | null;
            projectTitleOrNumber?: string | null;
            purchaseOrderNumber?: string | null;
            manufacturer?: string | null;
            modelNumber?: string | null;
            ieeeStd841MotorType?: string | null;
            additionalCertification?: string | null;
            startingMethod?: string | null;
            numberOfPolesMotorSynchronousSpeed?: string | null;
            directionOfRotation?: string | null;
            methodOfMotorCouplingToDrivenEquipment?: string | null;
            motorRatedFrequency?: string | null;
            motorRatedVoltage?: string | null;
            frameSize?: string | null;
            ratedPowerOutput?: string | null;
            serviceFactor?: string | null;
            fullLoadCurrent?: string | null;
            loadType?: string | null;
            minimumOperatingSpeed?: string | null;
            maximumOperatingSpeed?: string | null;
            floatingMarineShipboard?: string | null;
            chemicalsOrCorrosives?: string | null;
            altitude?: string | null;
            minimumAmbientAirTemperature?: string | null;
            maximumAmbientAirTemperature?: string | null;
            motorDesignsAndStartingCharacteristics?: string | null;
            ratedFullLoadSpeed?: string | null;
            ratedFullLoadTorque?: string | null;
            ratedBreakdownTorque?: string | null;
            efficiencyAt100PercentRatedOutput?: string | null;
            efficiencyAt75PercentRatedOutput?: string | null;
            efficiencyAt50PercentRatedOutput?: string | null;
            powerFactorAt100PercentRatedOutput?: string | null;
            powerFactorAt75PercentRatedOutput?: string | null;
            powerFactorAt50PercentRatedOutput?: string | null;
            maximumPermissibleSoundPressureAt1Meter?: string | null;
            motorSoundPressureAt1Meter?: string | null;
            motorWeight?: string | null;
            stainlessSteelHardware?: string | null;
            enclosureType?: string | null;
            enclosureIngressProtection?: string | null;
            fanMaterial?: string | null;
            position?: string | null;
            ingressProtectionOfTerminalBoxes?: string | null;
            mainTerminalBoxCableEntryHoleSizeAndNumber?: string | null;
            oversizedTerminalBox?: string | null;
            mainTerminalBoxMaterial?: string | null;
            l10Life?: string | null;
            driveEndBearingNumber?: string | null;
            nonDriveEndBearingNumber?: string | null;
            externalRadialLoadingOnMotorShaftEnd?: string | null;
            externalAxialLoadingOnMotorShaftEnd?: string | null;
            recommendedLubricant?: string | null;
            grease?: string | null;
            oilMistLubricant?: string | null;
            sealedForLifeAntiFrictionBearing?: string | null;
            asdFedMotorNonDriveEndInsulationBearingRequirement?: string | null;
            spaceHeater?: string | null;
            spaceHeaterTerminalBox?: string | null;
            spaceHeaterVoltage?: string | null;
            warningLabel?: string | null;
            warningLabelLanguage?: string | null;
            mountingPosition?: string | null;
            typeOfMounting?: string | null;
            flangeType?: string | null;
            verticalMotorShaftOrientation?: string | null;
            nonReverseRatchet?: string | null;
            dripCover?: string | null;
            verticallyMountedMotorAdditionalRequirement?: string | null;
            provisionsForVibrationMonitoring?: string | null;
            windingTemperatureDetectors?: string | null;
            bearingTemperatureDetectors?: string | null;
            instrumentationTerminalBox?: string | null;
            provisionForIoTHardwareInstallation?: string | null;
            motorMonitoringDevice?: string | null;
            atmosphericCorrosivityCategory?: string | null;
            surfaceProtectionDurabilityCategory?: string | null;
            hazardousAreaClassification?: string | null;
            uL674Listing?: string | null;
            temperatureGroup?: string | null;
            gasDustGroup?: string | null;
            shopInspection?: string | null;
            vibrationTest?: string | null;
            additionalTest?: string | null;
            storageConditions?: string | null;
            storageDuration?: string | null;
            motorNameplateOilMistLubricated?: string | null;
            motorTemporaryTagOilMistReadyDoNotRunWithoutOil?: string | null;
            motorDataSheet?: string | null;
            deliveryOfMotorRoutineTestData?: string | null;
            torqueAndCurrentVSSpeedCurve?: string | null;
            motorThermalCurves?: string | null;
            maximumPermissibleStallTimeData?: string | null;
            asdOperationCurves?: string | null;
            dimensionalOutlineDrawingShowingWeightLocationOfTerminalBoxesAndAccessories?: string | null;
            installationOperationAndMaintenanceManuals?: string | null;
            motorConnectionDiagramIncludingAuxilliaries?: string | null;
            additionalTestRecord?: string | null;
            certifications?: string | null;
            serialNumber?: string | null;
            conformityAssessmentSystemLevel?: string | null;
            dutyType?: string | null;
            numberOfPoles?: string | null;
            dutyPointShaftPower?: string | null;
            momentOfInertiaOfTheLoadJext?: string | null;
            locationEnvironment?: string | null;
            standstillPeriod?: string | null;
            maximumRelativeHumidity?: string | null;
            impactProtection?: string | null;
            thermalClass?: string | null;
            temperatureRiseClass?: string | null;
            momentOfInertiaOfTheMotorJm?: string | null;
            dataForProtectionSettingPowerModelling?: string | null;
            transportAndStorageConditions?: string | null;
            efficiency?: string | null;
            purchaserMaximumPermissibleNoiseLimit?: string | null;
            maximumDeclaredMotorSoundPowerLevelAtNoLoad?: string | null;
            maximumExpectedMotorSoundPowerLevelAtFullLoad?: string | null;
            noiseLevelTestAtOneMotorFromThisOrderBatch?: string | null;
            stainlessSteelFixings?: string | null;
            maximumVibrationMagnitude?: string | null;
            fanImpellerMaterial?: string | null;
            fanDirectionOfRotation?: string | null;
            terminalBoxLocation?: string | null;
            lineConductorTerminalBoxCableGlandEntries?: string | null;
            lineConductorCrossSectionArea?: string | null;
            largeTerminalBox?: string | null;
            dEndBearingType?: string | null;
            nEndBearingType?: string | null;
            internalClearance?: string | null;
            lubricationSpecification?: string | null;
            heaterRequirement?: string | null;
            supplyVoltage?: string | null;
            seperateTerminalBox?: string | null;
            mountingArrangement?: string | null;
            coolingMethod?: string | null;
            vibrationMonitoring?: string | null;
            vibrationLevelTestReport?: string | null;
            shockPulseMonitoringConnection?: string | null;
            surfaceProtectionCorrosivityCategory?: string | null;
            surfaceFinish?: string | null;
            paintColor?: string | null;
            windingTemperatureDetection?: string | null;
            converterManufacturer?: string | null;
            converterModelNumber?: string | null;
            fineBalancingAboveRatedSpeed?: string | null;
            motorToBeRatedForUseInPotentiallyExplosiveAtmosphere?: string | null;
            hazardousAreaEquipmentCertifyingBody?: string | null;
            equipmentProtectionLevel?: string | null;
            motorClassification?: string | null;
            loadDrive?: string | null;
        }
        export interface ElectricalSupplierOfferedProduct {
            orderStatus?: string | null;
            tagNumber?: string | null;
            tagDescription?: string | null;
            clientName?: string | null;
            siteOrLocation?: string | null;
            projectTitleOrNumber?: string | null;
            purchaseOrderNumber?: string | null;
            manufacturer?: string | null;
            modelNumber?: string | null;
            ieeeStd841MotorType?: string | null;
            additionalCertification?: string | null;
            startingMethod?: string | null;
            numberOfPolesMotorSynchronousSpeed?: string | null;
            directionOfRotation?: string | null;
            methodOfMotorCouplingToDrivenEquipment?: string | null;
            motorRatedFrequency?: string | null;
            motorRatedVoltage?: string | null;
            frameSize?: string | null;
            ratedPowerOutput?: string | null;
            serviceFactor?: string | null;
            fullLoadCurrent?: string | null;
            loadType?: string | null;
            minimumOperatingSpeed?: string | null;
            maximumOperatingSpeed?: string | null;
            floatingMarineShipboard?: string | null;
            chemicalsOrCorrosives?: string | null;
            altitude?: string | null;
            minimumAmbientAirTemperature?: string | null;
            maximumAmbientAirTemperature?: string | null;
            motorDesignsAndStartingCharacteristics?: string | null;
            ratedFullLoadSpeed?: string | null;
            ratedFullLoadTorque?: string | null;
            ratedBreakdownTorque?: string | null;
            efficiencyAt100PercentRatedOutput?: string | null;
            efficiencyAt75PercentRatedOutput?: string | null;
            efficiencyAt50PercentRatedOutput?: string | null;
            powerFactorAt100PercentRatedOutput?: string | null;
            powerFactorAt75PercentRatedOutput?: string | null;
            powerFactorAt50PercentRatedOutput?: string | null;
            maximumPermissibleSoundPressureAt1Meter?: string | null;
            motorSoundPressureAt1Meter?: string | null;
            motorWeight?: string | null;
            stainlessSteelHardware?: string | null;
            enclosureType?: string | null;
            enclosureIngressProtection?: string | null;
            fanMaterial?: string | null;
            position?: string | null;
            ingressProtectionOfTerminalBoxes?: string | null;
            mainTerminalBoxCableEntryHoleSizeAndNumber?: string | null;
            oversizedTerminalBox?: string | null;
            mainTerminalBoxMaterial?: string | null;
            l10Life?: string | null;
            driveEndBearingNumber?: string | null;
            nonDriveEndBearingNumber?: string | null;
            externalRadialLoadingOnMotorShaftEnd?: string | null;
            externalAxialLoadingOnMotorShaftEnd?: string | null;
            recommendedLubricant?: string | null;
            grease?: string | null;
            oilMistLubricant?: string | null;
            sealedForLifeAntiFrictionBearing?: string | null;
            asdFedMotorNonDriveEndInsulationBearingRequirement?: string | null;
            spaceHeater?: string | null;
            spaceHeaterTerminalBox?: string | null;
            spaceHeaterVoltage?: string | null;
            warningLabel?: string | null;
            warningLabelLanguage?: string | null;
            mountingPosition?: string | null;
            typeOfMounting?: string | null;
            flangeType?: string | null;
            verticalMotorShaftOrientation?: string | null;
            nonReverseRatchet?: string | null;
            dripCover?: string | null;
            verticallyMountedMotorAdditionalRequirement?: string | null;
            provisionsForVibrationMonitoring?: string | null;
            windingTemperatureDetectors?: string | null;
            bearingTemperatureDetectors?: string | null;
            instrumentationTerminalBox?: string | null;
            provisionForIoTHardwareInstallation?: string | null;
            motorMonitoringDevice?: string | null;
            atmosphericCorrosivityCategory?: string | null;
            surfaceProtectionDurabilityCategory?: string | null;
            hazardousAreaClassification?: string | null;
            uL674Listing?: string | null;
            temperatureGroup?: string | null;
            gasDustGroup?: string | null;
            shopInspection?: string | null;
            vibrationTest?: string | null;
            additionalTest?: string | null;
            storageConditions?: string | null;
            storageDuration?: string | null;
            motorNameplateOilMistLubricated?: string | null;
            motorTemporaryTagOilMistReadyDoNotRunWithoutOil?: string | null;
            motorDataSheet?: string | null;
            deliveryOfMotorRoutineTestData?: string | null;
            torqueAndCurrentVSSpeedCurve?: string | null;
            motorThermalCurves?: string | null;
            maximumPermissibleStallTimeData?: string | null;
            asdOperationCurves?: string | null;
            dimensionalOutlineDrawingShowingWeightLocationOfTerminalBoxesAndAccessories?: string | null;
            installationOperationAndMaintenanceManuals?: string | null;
            motorConnectionDiagramIncludingAuxilliaries?: string | null;
            additionalTestRecord?: string | null;
            certifications?: string | null;
            serialNumber?: string | null;
            conformityAssessmentSystemLevel?: string | null;
            dutyType?: string | null;
            numberOfPoles?: string | null;
            dutyPointShaftPower?: string | null;
            momentOfInertiaOfTheLoadJext?: string | null;
            locationEnvironment?: string | null;
            standstillPeriod?: string | null;
            maximumRelativeHumidity?: string | null;
            impactProtection?: string | null;
            thermalClass?: string | null;
            temperatureRiseClass?: string | null;
            momentOfInertiaOfTheMotorJm?: string | null;
            dataForProtectionSettingPowerModelling?: string | null;
            transportAndStorageConditions?: string | null;
            efficiency?: string | null;
            purchaserMaximumPermissibleNoiseLimit?: string | null;
            maximumDeclaredMotorSoundPowerLevelAtNoLoad?: string | null;
            maximumExpectedMotorSoundPowerLevelAtFullLoad?: string | null;
            noiseLevelTestAtOneMotorFromThisOrderBatch?: string | null;
            stainlessSteelFixings?: string | null;
            maximumVibrationMagnitude?: string | null;
            fanImpellerMaterial?: string | null;
            fanDirectionOfRotation?: string | null;
            terminalBoxLocation?: string | null;
            lineConductorTerminalBoxCableGlandEntries?: string | null;
            lineConductorCrossSectionArea?: string | null;
            largeTerminalBox?: string | null;
            dEndBearingType?: string | null;
            nEndBearingType?: string | null;
            internalClearance?: string | null;
            lubricationSpecification?: string | null;
            heaterRequirement?: string | null;
            supplyVoltage?: string | null;
            seperateTerminalBox?: string | null;
            mountingArrangement?: string | null;
            coolingMethod?: string | null;
            vibrationMonitoring?: string | null;
            vibrationLevelTestReport?: string | null;
            shockPulseMonitoringConnection?: string | null;
            surfaceProtectionCorrosivityCategory?: string | null;
            surfaceFinish?: string | null;
            paintColor?: string | null;
            windingTemperatureDetection?: string | null;
            converterManufacturer?: string | null;
            converterModelNumber?: string | null;
            fineBalancingAboveRatedSpeed?: string | null;
            motorToBeRatedForUseInPotentiallyExplosiveAtmosphere?: string | null;
            hazardousAreaEquipmentCertifyingBody?: string | null;
            equipmentProtectionLevel?: string | null;
            motorClassification?: string | null;
            loadDrive?: string | null;
        }
        export interface MechanicalPurchaserRequirement {
            conformityAssesmentSystemLevel?: string | null;
            tagNumber?: string | null;
            tagDescription?: string | null;
            applicableTo?: string | null;
            units?: string | null;
            manufacturer?: string | null;
            pumpModelAndSize?: string | null;
            numberOfStages?: string | null;
            numberOfPumpUnits?: string | null;
            serviceType?: string | null;
            numberOfStarts?: string | null;
            instantaneousStartUp?: string | null;
            pumpOperationalMode?: string | null;
            pumpStartUpMode?: string | null;
            individualPumpFlowControl?: string | null;
            projectCountry?: string | null;
            projectRegion?: string | null;
            plantEnvironmentalLocation?: string | null;
            equipmentLocation?: string | null;
            locationClimate?: string | null;
            locationSunlightProtection?: string | null;
            siteDataMounting?: string | null;
            specialWeatherProtection?: string | null;
            elevation?: string | null;
            barometer?: string | null;
            maximumAmbientTemperature?: string | null;
            minimumAmbientTemperature?: string | null;
            maximumRelativeHumidity?: string | null;
            minimumRelativeHumidity?: string | null;
            unusualConditions?: string | null;
            floatingApplicationsMotionDesignCriteria?: string | null;
            hazardousAreaClassificationStandard?: string | null;
            explosionHazardClassificationIEC?: string | null;
            explosionGasGroupIEC?: string | null;
            temperatureClassIEC?: string | null;
            explosionHazardClassificationNFPA?: string | null;
            explosionGasGroupNFPA?: string | null;
            temperatureClassNFPA?: string | null;
            ignitionHazardAssessment?: string | null;
            driversVoltage?: number | null; // double
            driversPhase?: number | null; // double
            driversFrequency?: number | null; // double
            heatingMedium?: string | null;
            heatingVoltage?: number | null; // double
            heatingPhase?: number | null; // double
            heatingFrequency?: number | null; // double
            heatingSteamMinimumTemperature?: number | null; // double
            heatingSteamMaximumTemperature?: number | null; // double
            heatingSteamMinimumPressure?: number | null; // double
            heatingSteamMaximumPressure?: number | null; // double
            coolingWaterMaximumInletTemperature?: number | null; // double
            coolingWaterDesignTemperature?: number | null; // double
            coolingWaterMaximumInletPressure?: number | null; // double
            coolingWaterDesignPressure?: number | null; // double
            coolingWaterType?: string | null;
            foulingFactor?: number | null; // double
            coolingWaterChlorideConcentration?: number | null; // double
            instrumentAirMinimumPressure?: number | null; // double
            instrumentAirMaximumPressure?: number | null; // double
            liquidName?: string | null;
            liquidType?: string | null;
            vaporPressureAtRatedTemperature?: number | null; // double
            vaporPressureMaximum?: number | null; // double
            vaporPressureMinimum?: number | null; // double
            relativeDensityRated?: number | null; // double
            relativeDensityMaximum?: number | null; // double
            relativeDensityMinimum?: number | null; // double
            specificHeatRated?: string | null;
            specificHeatMaximum?: string | null;
            specificHeatMinimum?: string | null;
            viscosityRated?: number | null; // double
            viscosityMaximum?: number | null; // double
            viscosityMinimum?: number | null; // double
            corrosiveConstituents?: string | null;
            erosiveConstituents?: string | null;
            h2SConcentration?: number | null; // double
            chlorideConcentration?: number | null; // double
            totalDissolvedSalts?: number | null; // double
            particulateSize?: number | null; // double
            particulateConcentration?: number | null; // double
            npshaDatum?: string | null;
            flowRated?: number | null; // double
            flowNormal?: number | null; // double
            flowMaximum?: number | null; // double
            flowMinimum?: number | null; // double
            flowAlternativeCondition?: number | null; // double
            npshaRated?: number | null; // double
            npshaNormal?: number | null; // double
            npshaMaximum?: number | null; // double
            npshaMinimum?: number | null; // double
            npshaAlternativeCondition?: number | null; // double
            npshaAt120PercentOfRatedFlow?: number | null; // double
            pumpingTemperatureRated?: number | null; // double
            pumpingTemperatureNormal?: number | null; // double
            pumpingTemperatureMaximum?: number | null; // double
            pumpingTemperatureMinimum?: number | null; // double
            pumpingTemperatureAlternativeCondition?: number | null; // double
            dischargePressureRated?: number | null; // double
            dischargePressureMaximum?: number | null; // double
            dischargePressureAlternativeCondition?: number | null; // double
            suctionPressureRated?: number | null; // double
            suctionPressureNormal?: number | null; // double
            suctionPressureMaximum?: number | null; // double
            suctionPressureMinimum?: number | null; // double
            suctionPressureAlternativeCondition?: number | null; // double
            differentialPressureRated?: number | null; // double
            differentialPressureAlternativeCondition?: number | null; // double
            differentialHeadRated?: number | null; // double
            differentialHeadAlternativeCondition?: number | null; // double
            hydraulicPower?: number | null; // double
            proposalCurveNumber?: string | null;
            impellerDiameterRated?: number | null; // double
            impellerDiameterMaximum?: number | null; // double
            impellerDiameterMinimum?: number | null; // double
            ratedSpeed?: number | null; // double
            ratedPower?: number | null; // double
            efficiency?: number | null; // double
            proposalCurveBEPFlow?: number | null; // double
            minimumFlowThermal?: number | null; // double
            minimumFlowStable?: number | null; // double
            startOfPreferredOperatingRegion?: number | null; // double
            endOfPreferredOperatingRegion?: number | null; // double
            startOfAllowableOperatingRegion?: number | null; // double
            endOfAllowableOperatingRegion?: number | null; // double
            maximumHeadAtRatedImpeller?: number | null; // double
            maximumPowerAtRatedImpeller?: number | null; // double
            npsH3AtRatedFlow?: number | null; // double
            npsH3At120PercentOfFlow?: number | null; // double
            npshanpsH3MarginAtRatedFlow?: number | null; // double
            npshanpsH3MarginInAllowableOperatingRegion?: number | null; // double
            specificSpeed?: number | null; // double
            suctionSpecificSpeed?: number | null; // double
            maximumAllowableSoundPressureLevel?: number | null; // double
            maximumAllowableSoundPowerLevel?: number | null; // double
            apiPumpType?: string | null;
            constructionMounting?: string | null;
            casingType?: string | null;
            impellerType?: string | null;
            rotationViewedFromCouplingEnd?: string | null;
            componentBalanceToISO2194011GradeG10?: string | null;
            impellerNumberOfVanes?: number | null; // double
            suctionSize?: number | null; // double
            suctionFacing?: string | null;
            suctionRating?: number | null; // double
            suctionPosition?: string | null;
            dischargeSize?: number | null; // double
            dischargeFacing?: string | null;
            dischargeRating?: number | null; // double
            dischargePosition?: string | null;
            nozzleLoads?: string | null;
            auxilliaryProcessLiquidPipingConstruction?: string | null;
            connectionDesignApprovalPriorToFabrication?: string | null;
            pressureCasingDrainSize?: string | null;
            pressureCasingVentSize?: number | null; // double
            drainValveSuppliedBy?: string | null;
            ventValveSuppliedBy?: string | null;
            pumpWarmUpOrCooldownLine?: string | null;
            machinedAndStuddedConnections?: string | null;
            pipeThreadsSpecification?: string | null;
            casePressureRatingMaximumAllowableWorkingTemperature?: number | null; // double
            casePressureRatingMaximumAllowableWorkingPressure?: number | null; // double
            bearingHousingCoolingMethod?: string | null;
            coolingWaterPipingPlan?: string | null;
            heatTracingAndOrInsulation?: string | null;
            purposeOfInsulation?: string | null;
            extentOfHeatTracingAndInsulation?: string | null;
            heatTracingAndOrInsulationSuppliedAndInstalledBy?: string | null;
            heatingTracingAndOrInsulationSpecification?: string | null;
            totalPackageEstimatedMass?: number | null; // double
            shaftFlexibilityIndexReportedByVendor?: string | null;
            shaftFlexibilityIndexOH2PumpsOnly?: string | null;
            oH3BackPulloutLiftingDevice?: string | null;
            shrinkFitLimitedMovementImpellers?: string | null;
            headMaximumAllowableWorkingPressure?: number | null; // double
            columnMaximumAllowableWorkingPressure?: number | null; // double
            bowlMaximumAllowableWorkingPressure?: number | null; // double
            suctionBarrelOrCanMaximumAllowableWorkingPressure?: number | null; // double
            pumpThrustBearingLocation?: string | null;
            suctionStrainerType?: string | null;
            levelControlBy?: string | null;
            lineShaftConnection?: string | null;
            lineShaftConfiguration?: string | null;
            lineShaftBearingLube?: string | null;
            lineShaftBearingQuantity?: number | null; // double
            hardenedSleevesUnderLineShaftBearings?: string | null;
            gradeUndersideOfPumpMountingPlateOrTopOfFoundationElevation?: number | null; // double
            lowLiquidLevelElevation?: number | null; // double
            sumpFloorElevation?: number | null; // double
            sumpDiameter?: number | null; // double
            gradeToTopOfPumpDischargeConnectionDimension?: number | null; // double
            pumpLengthGradeToUndersideOfPumpInletBellOrStrainerDimension?: number | null; // double
            gradeToFirstStageImpellerCenterlineDimension?: number | null; // double
            gradeToLiquidMinimumSubmergenceLevelDimension?: number | null; // double
            radialBearingType?: string | null;
            thrustTypeBearing?: string | null;
            reviewAndAcceptanceOfThrustBearingSize?: string | null;
            rollingElementBearingLifeCalculations?: string | null;
            lubrication?: string | null;
            oilViscosityISOGrade?: string | null;
            oilType?: string | null;
            greaseType?: string | null;
            greaseGrade?: string | null;
            bearingHousingSealingTypeModel?: string | null;
            oilMistReclassifiersSuppliedBy?: string | null;
            annexHClass?: string | null;
            minimumDesignMetalTemperature?: number | null; // double
            reducedHardnessMaterials?: string | null;
            applicableHardnessStandard?: string | null;
            specialCoatingForImpellerAndOtherWettedParts?: string | null;
            caseAndCaseCoverMaterial?: string | null;
            nonwettedPressureRetainingFastenersMaterial?: string | null;
            diffuserMaterial?: string | null;
            impellerMaterial?: string | null;
            inducerMaterial?: string | null;
            impellerWearComponentType?: string | null;
            impellerWearComponentMaterial?: string | null;
            impellerWearComponentHardness?: number | null; // double
            caseWearRingMaterial?: string | null;
            wearPartsHardnesses?: number | null; // double
            shaftMaterial?: string | null;
            auxilliaryProcessLiquidLinesFittingsAndOtherConnectionsToCasingIncludingSealPlansMaterial?: string | null;
            suctionBarrelCanMaterial?: string | null;
            dischargeHeadMaterial?: string | null;
            dischargeColumnMaterial?: string | null;
            headColumnMaterial?: string | null;
            dischargeElbowAndPipeMaterial?: string | null;
            bowlCasingMaterial?: string | null;
            bellmouthSuctionCoverMaterial?: string | null;
            strainerMaterial?: string | null;
            lineShaftMaterial?: string | null;
            shaftEnclosingTubeMaterial?: string | null;
            bowlShaftMaterial?: string | null;
            processWettedFastenersMaterial?: string | null;
            bearingRetainerOrSpiderMaterial?: string | null;
            lineShaftBearingMaterial?: string | null;
            lineShaftHardFacingMaterial?: string | null;
            lineShaftSleevesMaterial?: string | null;
            bearingLubricationLinesMaterial?: string | null;
            bowlBearingMaterial?: string | null;
            materialInspectionRequirements?: string | null;
            impactTestAsPer?: string | null;
            hardnessTestingOfPartsWeldsAndHeatAffectedZones?: string | null;
            additionalSurfaceSubSurfaceExamination?: string | null;
            additionalSurfaceSubSurfaceExaminationFor?: string | null;
            additionalSurfaceMagneticParticleOrLiquidPenetrantExamination?: string | null;
            additionalSubSurfaceUltrasonicOrRadiographicExamination?: string | null;
            additionalComponentsPMITested?: string | null;
            repairAndHeatTreatmentRecords?: string | null;
            apiStandard682MechanicalSealCode?: string | null;
            apiStandard682DataSheetAttached?: string | null;
            mechanicalSealPrimaryPlan?: number | null; // double
            mechanicalSealPrimaryPlanConstruction?: string | null;
            mechanicalSealSecondaryPlan?: string | null;
            tubingFittingsManufacturer?: string | null;
            additionalCentralFlushPort?: string | null;
            heatingJacketRequired?: string | null;
            staticSealingPressureMaximum?: number | null; // double
            staticSealingPressureMinimum?: number | null; // double
            dynamicSealingPressureMaximum?: number | null; // double
            dynamicSealingPressureMinimum?: number | null; // double
            sealDesignTemperatureMaximum?: number | null; // double
            sealDesignTemperatureMinimum?: number | null; // double
            couplingSpecification?: string | null;
            couplingManufacturer?: string | null;
            couplingTypeModelSize?: string | null;
            couplingRatingPowerPer100Rpm?: number | null; // double
            couplingComponentsBalanceGrade?: string | null;
            couplingWithHydraulicFit?: string | null;
            couplingWithProprietaryClampingDevice?: string | null;
            couplingGuardSpecification?: string | null;
            couplingAndExposedShaftGuardMaterial?: string | null;
            driverType?: string | null;
            driverSpecification?: string | null;
            driverManufacturer?: string | null;
            driverRating?: string | null;
            driverSizedForTestingOnWater?: string | null;
            driverFrameOrModel?: string | null;
            driverNameplatePower?: number | null; // double
            driverNominalSpeed?: number | null; // double
            driverRatedLoadSpeed?: number | null; // double
            driverLubricationMethod?: string | null;
            driverRadialBearingType?: string | null;
            driverThrustBearingType?: string | null;
            motorStartingMethod?: string | null;
            adjustableSpeedDrive?: string | null;
            sourceOfAdjustableSpeedDrive?: string | null;
            requiredTripSpeed?: number | null; // double
            gear?: string | null;
            gearSpecification?: string | null;
            gearAdjustableSpeedDriveManufacturer?: string | null;
            accelerometers?: string | null;
            numberOfAccelerometers?: string | null;
            accelerometersMountingLocation?: string | null;
            threadedProvisionForMountingAccelerometersOnly?: string | null;
            flatSurfaceProvisionForMountingAccelerometersOnly?: string | null;
            vibrationProbes?: string | null;
            numberOfVibrationProbesPerRadialBearing?: string | null;
            vibrationProbesMountingLocation?: string | null;
            threadedProvisionForMountingVibrationProbesOnly?: string | null;
            flatSurfaceProvisionForMountingVibrationProbesOnly?: string | null;
            oneEventPerRevolutionProbeKeyPhasor?: string | null;
            temperatureProbes?: string | null;
            numberOfTemperatureProbesPerRadialBearing?: string | null;
            temperatureProbesMountingLOcation?: string | null;
            provisionForMountingTemperatureProbesOnly?: string | null;
            temperatureGaugesWithThermowells?: string | null;
            monitorsAndCablesSuppliedBy?: string | null;
            hydrostaticTestOfVS6VS7BowlsAndColumn?: string | null;
            residualUnbalanceTestMethod?: string | null;
            cleanlinessPriorToFinalAssembly?: string | null;
            nozzleLoadTest?: string | null;
            structuralResonanceTest?: string | null;
            driverToBeUsedForTesting?: string | null;
            notificationOfSuccessfulShopPerformanceTest?: string | null;
            performanceTestNPSHALimitedTo110PercentSiteNPSHA?: string | null;
            perfomanceTestAtMinimumSubmergenceForVerticalSubmergedPumps?: string | null;
            vibrationTestMeasurementLocations?: string | null;
            retestAfterFinalHeadAdjustment?: string | null;
            npshTest?: string | null;
            npshTestType?: string | null;
            npshTestSpecification?: string | null;
            completeUnitTest?: string | null;
            durationOfCompleteUnitTest?: string | null;
            soundLevelTest?: string | null;
            auxilliaryEquipmentTest?: string | null;
            auxilliaryEquipmentIncludedInTest?: string | null;
            bearingHousingResonanceTest?: string | null;
            disassemblyAfterTest?: string | null;
            hydrodynamicBearingsRemovalAndInspectionAfterTest?: string | null;
            surfacePreperationAndPaintingSpecification?: string | null;
            vfdSteadyStateForcedResponseAnalysis?: string | null;
            transientForcedResponseAnalysis?: string | null;
            torsionalAnalysisReport?: string | null;
            lateralAnalysis?: string | null;
            commissioningAndStartUpSparesQuotation?: string | null;
            normalMaintenanceSparesQuotation?: string | null;
            twoYearOperatingSparesQuotation?: string | null;
            capitalSparesQuotation?: string | null;
            spareRotorStorageOrientation?: string | null;
            shippingAndStorageContainerForVerticalStorageOfSpareRotor?: string | null;
            inertGasPurgeForSpareRotorContainer?: string | null;
            preservationAndPackingSpecification?: string | null;
            preservationAndPackingSuitableFor?: string | null;
            exportBoxing?: string | null;
            outdoorStorage?: string | null;
            apiBasePlateNumber?: number | null; // double
            sizedToAccommodateSealPipingSystems?: string | null;
            baseplateType?: string | null;
            baseplateMounting?: string | null;
            stainlessSteelPlateThickness02In5mmMinimumUnderAllPumpFeet?: string | null;
        }
        export interface MechanicalSupplierOfferedProduct {
            conformityAssesmentSystemLevel?: string | null;
            tagNumber?: string | null;
            tagDescription?: string | null;
            applicableTo?: string | null;
            units?: string | null;
            manufacturer?: string | null;
            pumpModelAndSize?: string | null;
            numberOfStages?: string | null;
            numberOfPumpUnits?: string | null;
            serviceType?: string | null;
            numberOfStarts?: string | null;
            instantaneousStartUp?: string | null;
            pumpOperationalMode?: string | null;
            pumpStartUpMode?: string | null;
            individualPumpFlowControl?: string | null;
            projectCountry?: string | null;
            projectRegion?: string | null;
            plantEnvironmentalLocation?: string | null;
            equipmentLocation?: string | null;
            locationClimate?: string | null;
            locationSunlightProtection?: string | null;
            siteDataMounting?: string | null;
            specialWeatherProtection?: string | null;
            elevation?: string | null;
            barometer?: string | null;
            maximumAmbientTemperature?: string | null;
            minimumAmbientTemperature?: string | null;
            maximumRelativeHumidity?: string | null;
            minimumRelativeHumidity?: string | null;
            unusualConditions?: string | null;
            floatingApplicationsMotionDesignCriteria?: string | null;
            hazardousAreaClassificationStandard?: string | null;
            explosionHazardClassificationIEC?: string | null;
            explosionGasGroupIEC?: string | null;
            temperatureClassIEC?: string | null;
            explosionHazardClassificationNFPA?: string | null;
            explosionGasGroupNFPA?: string | null;
            temperatureClassNFPA?: string | null;
            ignitionHazardAssessment?: string | null;
            driversVoltage?: number | null; // double
            driversPhase?: number | null; // double
            driversFrequency?: number | null; // double
            heatingMedium?: string | null;
            heatingVoltage?: number | null; // double
            heatingPhase?: number | null; // double
            heatingFrequency?: number | null; // double
            heatingSteamMinimumTemperature?: number | null; // double
            heatingSteamMaximumTemperature?: number | null; // double
            heatingSteamMinimumPressure?: number | null; // double
            heatingSteamMaximumPressure?: number | null; // double
            coolingWaterMaximumInletTemperature?: number | null; // double
            coolingWaterDesignTemperature?: number | null; // double
            coolingWaterMaximumInletPressure?: number | null; // double
            coolingWaterDesignPressure?: number | null; // double
            coolingWaterType?: string | null;
            foulingFactor?: number | null; // double
            coolingWaterChlorideConcentration?: number | null; // double
            instrumentAirMinimumPressure?: number | null; // double
            instrumentAirMaximumPressure?: number | null; // double
            liquidName?: string | null;
            liquidType?: string | null;
            vaporPressureAtRatedTemperature?: number | null; // double
            vaporPressureMaximum?: number | null; // double
            vaporPressureMinimum?: number | null; // double
            relativeDensityRated?: number | null; // double
            relativeDensityMaximum?: number | null; // double
            relativeDensityMinimum?: number | null; // double
            specificHeatRated?: string | null;
            specificHeatMaximum?: string | null;
            specificHeatMinimum?: string | null;
            viscosityRated?: number | null; // double
            viscosityMaximum?: number | null; // double
            viscosityMinimum?: number | null; // double
            corrosiveConstituents?: string | null;
            erosiveConstituents?: string | null;
            h2SConcentration?: number | null; // double
            chlorideConcentration?: number | null; // double
            totalDissolvedSalts?: number | null; // double
            particulateSize?: number | null; // double
            particulateConcentration?: number | null; // double
            npshaDatum?: string | null;
            flowRated?: number | null; // double
            flowNormal?: number | null; // double
            flowMaximum?: number | null; // double
            flowMinimum?: number | null; // double
            flowAlternativeCondition?: number | null; // double
            npshaRated?: number | null; // double
            npshaNormal?: number | null; // double
            npshaMaximum?: number | null; // double
            npshaMinimum?: number | null; // double
            npshaAlternativeCondition?: number | null; // double
            npshaAt120PercentOfRatedFlow?: number | null; // double
            pumpingTemperatureRated?: number | null; // double
            pumpingTemperatureNormal?: number | null; // double
            pumpingTemperatureMaximum?: number | null; // double
            pumpingTemperatureMinimum?: number | null; // double
            pumpingTemperatureAlternativeCondition?: number | null; // double
            dischargePressureRated?: number | null; // double
            dischargePressureMaximum?: number | null; // double
            dischargePressureAlternativeCondition?: number | null; // double
            suctionPressureRated?: number | null; // double
            suctionPressureNormal?: number | null; // double
            suctionPressureMaximum?: number | null; // double
            suctionPressureMinimum?: number | null; // double
            suctionPressureAlternativeCondition?: number | null; // double
            differentialPressureRated?: number | null; // double
            differentialPressureAlternativeCondition?: number | null; // double
            differentialHeadRated?: number | null; // double
            differentialHeadAlternativeCondition?: number | null; // double
            hydraulicPower?: number | null; // double
            proposalCurveNumber?: string | null;
            impellerDiameterRated?: number | null; // double
            impellerDiameterMaximum?: number | null; // double
            impellerDiameterMinimum?: number | null; // double
            ratedSpeed?: number | null; // double
            ratedPower?: number | null; // double
            efficiency?: number | null; // double
            proposalCurveBEPFlow?: number | null; // double
            minimumFlowThermal?: number | null; // double
            minimumFlowStable?: number | null; // double
            startOfPreferredOperatingRegion?: number | null; // double
            endOfPreferredOperatingRegion?: number | null; // double
            startOfAllowableOperatingRegion?: number | null; // double
            endOfAllowableOperatingRegion?: number | null; // double
            maximumHeadAtRatedImpeller?: number | null; // double
            maximumPowerAtRatedImpeller?: number | null; // double
            npsH3AtRatedFlow?: number | null; // double
            npsH3At120PercentOfFlow?: number | null; // double
            npshanpsH3MarginAtRatedFlow?: number | null; // double
            npshanpsH3MarginInAllowableOperatingRegion?: number | null; // double
            specificSpeed?: number | null; // double
            suctionSpecificSpeed?: number | null; // double
            maximumAllowableSoundPressureLevel?: number | null; // double
            maximumAllowableSoundPowerLevel?: number | null; // double
            apiPumpType?: string | null;
            constructionMounting?: string | null;
            casingType?: string | null;
            impellerType?: string | null;
            rotationViewedFromCouplingEnd?: string | null;
            componentBalanceToISO2194011GradeG10?: string | null;
            impellerNumberOfVanes?: number | null; // double
            suctionSize?: number | null; // double
            suctionFacing?: string | null;
            suctionRating?: number | null; // double
            suctionPosition?: string | null;
            dischargeSize?: number | null; // double
            dischargeFacing?: string | null;
            dischargeRating?: number | null; // double
            dischargePosition?: string | null;
            nozzleLoads?: string | null;
            auxilliaryProcessLiquidPipingConstruction?: string | null;
            connectionDesignApprovalPriorToFabrication?: string | null;
            pressureCasingDrainSize?: string | null;
            pressureCasingVentSize?: number | null; // double
            drainValveSuppliedBy?: string | null;
            ventValveSuppliedBy?: string | null;
            pumpWarmUpOrCooldownLine?: string | null;
            machinedAndStuddedConnections?: string | null;
            pipeThreadsSpecification?: string | null;
            casePressureRatingMaximumAllowableWorkingTemperature?: number | null; // double
            casePressureRatingMaximumAllowableWorkingPressure?: number | null; // double
            bearingHousingCoolingMethod?: string | null;
            coolingWaterPipingPlan?: string | null;
            heatTracingAndOrInsulation?: string | null;
            purposeOfInsulation?: string | null;
            extentOfHeatTracingAndInsulation?: string | null;
            heatTracingAndOrInsulationSuppliedAndInstalledBy?: string | null;
            heatingTracingAndOrInsulationSpecification?: string | null;
            totalPackageEstimatedMass?: number | null; // double
            shaftFlexibilityIndexReportedByVendor?: string | null;
            shaftFlexibilityIndexOH2PumpsOnly?: string | null;
            oH3BackPulloutLiftingDevice?: string | null;
            shrinkFitLimitedMovementImpellers?: string | null;
            headMaximumAllowableWorkingPressure?: number | null; // double
            columnMaximumAllowableWorkingPressure?: number | null; // double
            bowlMaximumAllowableWorkingPressure?: number | null; // double
            suctionBarrelOrCanMaximumAllowableWorkingPressure?: number | null; // double
            pumpThrustBearingLocation?: string | null;
            suctionStrainerType?: string | null;
            levelControlBy?: string | null;
            lineShaftConnection?: string | null;
            lineShaftConfiguration?: string | null;
            lineShaftBearingLube?: string | null;
            lineShaftBearingQuantity?: number | null; // double
            hardenedSleevesUnderLineShaftBearings?: string | null;
            gradeUndersideOfPumpMountingPlateOrTopOfFoundationElevation?: number | null; // double
            lowLiquidLevelElevation?: number | null; // double
            sumpFloorElevation?: number | null; // double
            sumpDiameter?: number | null; // double
            gradeToTopOfPumpDischargeConnectionDimension?: number | null; // double
            pumpLengthGradeToUndersideOfPumpInletBellOrStrainerDimension?: number | null; // double
            gradeToFirstStageImpellerCenterlineDimension?: number | null; // double
            gradeToLiquidMinimumSubmergenceLevelDimension?: number | null; // double
            radialBearingType?: string | null;
            thrustTypeBearing?: string | null;
            reviewAndAcceptanceOfThrustBearingSize?: string | null;
            rollingElementBearingLifeCalculations?: string | null;
            lubrication?: string | null;
            oilViscosityISOGrade?: string | null;
            oilType?: string | null;
            greaseType?: string | null;
            greaseGrade?: string | null;
            bearingHousingSealingTypeModel?: string | null;
            oilMistReclassifiersSuppliedBy?: string | null;
            annexHClass?: string | null;
            minimumDesignMetalTemperature?: number | null; // double
            reducedHardnessMaterials?: string | null;
            applicableHardnessStandard?: string | null;
            specialCoatingForImpellerAndOtherWettedParts?: string | null;
            caseAndCaseCoverMaterial?: string | null;
            nonwettedPressureRetainingFastenersMaterial?: string | null;
            diffuserMaterial?: string | null;
            impellerMaterial?: string | null;
            inducerMaterial?: string | null;
            impellerWearComponentType?: string | null;
            impellerWearComponentMaterial?: string | null;
            impellerWearComponentHardness?: number | null; // double
            caseWearRingMaterial?: string | null;
            wearPartsHardnesses?: number | null; // double
            shaftMaterial?: string | null;
            auxilliaryProcessLiquidLinesFittingsAndOtherConnectionsToCasingIncludingSealPlansMaterial?: string | null;
            suctionBarrelCanMaterial?: string | null;
            dischargeHeadMaterial?: string | null;
            dischargeColumnMaterial?: string | null;
            headColumnMaterial?: string | null;
            dischargeElbowAndPipeMaterial?: string | null;
            bowlCasingMaterial?: string | null;
            bellmouthSuctionCoverMaterial?: string | null;
            strainerMaterial?: string | null;
            lineShaftMaterial?: string | null;
            shaftEnclosingTubeMaterial?: string | null;
            bowlShaftMaterial?: string | null;
            processWettedFastenersMaterial?: string | null;
            bearingRetainerOrSpiderMaterial?: string | null;
            lineShaftBearingMaterial?: string | null;
            lineShaftHardFacingMaterial?: string | null;
            lineShaftSleevesMaterial?: string | null;
            bearingLubricationLinesMaterial?: string | null;
            bowlBearingMaterial?: string | null;
            materialInspectionRequirements?: string | null;
            impactTestAsPer?: string | null;
            hardnessTestingOfPartsWeldsAndHeatAffectedZones?: string | null;
            additionalSurfaceSubSurfaceExamination?: string | null;
            additionalSurfaceSubSurfaceExaminationFor?: string | null;
            additionalSurfaceMagneticParticleOrLiquidPenetrantExamination?: string | null;
            additionalSubSurfaceUltrasonicOrRadiographicExamination?: string | null;
            additionalComponentsPMITested?: string | null;
            repairAndHeatTreatmentRecords?: string | null;
            apiStandard682MechanicalSealCode?: string | null;
            apiStandard682DataSheetAttached?: string | null;
            mechanicalSealPrimaryPlan?: number | null; // double
            mechanicalSealPrimaryPlanConstruction?: string | null;
            mechanicalSealSecondaryPlan?: string | null;
            tubingFittingsManufacturer?: string | null;
            additionalCentralFlushPort?: string | null;
            heatingJacketRequired?: string | null;
            staticSealingPressureMaximum?: number | null; // double
            staticSealingPressureMinimum?: number | null; // double
            dynamicSealingPressureMaximum?: number | null; // double
            dynamicSealingPressureMinimum?: number | null; // double
            sealDesignTemperatureMaximum?: number | null; // double
            sealDesignTemperatureMinimum?: number | null; // double
            couplingSpecification?: string | null;
            couplingManufacturer?: string | null;
            couplingTypeModelSize?: string | null;
            couplingRatingPowerPer100Rpm?: number | null; // double
            couplingComponentsBalanceGrade?: string | null;
            couplingWithHydraulicFit?: string | null;
            couplingWithProprietaryClampingDevice?: string | null;
            couplingGuardSpecification?: string | null;
            couplingAndExposedShaftGuardMaterial?: string | null;
            driverType?: string | null;
            driverSpecification?: string | null;
            driverManufacturer?: string | null;
            driverRating?: string | null;
            driverSizedForTestingOnWater?: string | null;
            driverFrameOrModel?: string | null;
            driverNameplatePower?: number | null; // double
            driverNominalSpeed?: number | null; // double
            driverRatedLoadSpeed?: number | null; // double
            driverLubricationMethod?: string | null;
            driverRadialBearingType?: string | null;
            driverThrustBearingType?: string | null;
            motorStartingMethod?: string | null;
            adjustableSpeedDrive?: string | null;
            sourceOfAdjustableSpeedDrive?: string | null;
            requiredTripSpeed?: number | null; // double
            gear?: string | null;
            gearSpecification?: string | null;
            gearAdjustableSpeedDriveManufacturer?: string | null;
            accelerometers?: string | null;
            numberOfAccelerometers?: string | null;
            accelerometersMountingLocation?: string | null;
            threadedProvisionForMountingAccelerometersOnly?: string | null;
            flatSurfaceProvisionForMountingAccelerometersOnly?: string | null;
            vibrationProbes?: string | null;
            numberOfVibrationProbesPerRadialBearing?: string | null;
            vibrationProbesMountingLocation?: string | null;
            threadedProvisionForMountingVibrationProbesOnly?: string | null;
            flatSurfaceProvisionForMountingVibrationProbesOnly?: string | null;
            oneEventPerRevolutionProbeKeyPhasor?: string | null;
            temperatureProbes?: string | null;
            numberOfTemperatureProbesPerRadialBearing?: string | null;
            temperatureProbesMountingLOcation?: string | null;
            provisionForMountingTemperatureProbesOnly?: string | null;
            temperatureGaugesWithThermowells?: string | null;
            monitorsAndCablesSuppliedBy?: string | null;
            hydrostaticTestOfVS6VS7BowlsAndColumn?: string | null;
            residualUnbalanceTestMethod?: string | null;
            cleanlinessPriorToFinalAssembly?: string | null;
            nozzleLoadTest?: string | null;
            structuralResonanceTest?: string | null;
            driverToBeUsedForTesting?: string | null;
            notificationOfSuccessfulShopPerformanceTest?: string | null;
            performanceTestNPSHALimitedTo110PercentSiteNPSHA?: string | null;
            perfomanceTestAtMinimumSubmergenceForVerticalSubmergedPumps?: string | null;
            vibrationTestMeasurementLocations?: string | null;
            retestAfterFinalHeadAdjustment?: string | null;
            npshTest?: string | null;
            npshTestType?: string | null;
            npshTestSpecification?: string | null;
            completeUnitTest?: string | null;
            durationOfCompleteUnitTest?: string | null;
            soundLevelTest?: string | null;
            auxilliaryEquipmentTest?: string | null;
            auxilliaryEquipmentIncludedInTest?: string | null;
            bearingHousingResonanceTest?: string | null;
            disassemblyAfterTest?: string | null;
            hydrodynamicBearingsRemovalAndInspectionAfterTest?: string | null;
            surfacePreperationAndPaintingSpecification?: string | null;
            vfdSteadyStateForcedResponseAnalysis?: string | null;
            transientForcedResponseAnalysis?: string | null;
            torsionalAnalysisReport?: string | null;
            lateralAnalysis?: string | null;
            commissioningAndStartUpSparesQuotation?: string | null;
            normalMaintenanceSparesQuotation?: string | null;
            twoYearOperatingSparesQuotation?: string | null;
            capitalSparesQuotation?: string | null;
            spareRotorStorageOrientation?: string | null;
            shippingAndStorageContainerForVerticalStorageOfSpareRotor?: string | null;
            inertGasPurgeForSpareRotorContainer?: string | null;
            preservationAndPackingSpecification?: string | null;
            preservationAndPackingSuitableFor?: string | null;
            exportBoxing?: string | null;
            outdoorStorage?: string | null;
            apiBasePlateNumber?: number | null; // double
            sizedToAccommodateSealPipingSystems?: string | null;
            baseplateType?: string | null;
            baseplateMounting?: string | null;
            stainlessSteelPlateThickness02In5mmMinimumUnderAllPumpFeet?: string | null;
        }
        export interface PurchaserRequirement {
            codeRequirement?: number | null; // int32
            conformityAssessmentSystemLevel?: number | null; // int32
            tagNumber?: string | null;
            serviceDescription?: string | null;
            equipmentManufacturerSerialNumber?: string | null;
            projectCountry?: string | null;
            projectRegion?: string | null;
            plantEnvironmentalLocation?: string | null;
            pidNumber?: string | null;
            lineOrEquipmentNumber?: string | null;
            minimumAmbientTemperature?: number | null; // int32
            maximumAmbientTemperature?: number | null; // int32
            baseConditions?: string | null;
            baseTemperature?: number | null; // int32
            basePressure?: number | null; // int32
            coatingDurability?: string | null;
            silRating?: string | null;
            ingressProtection?: string | null;
            exProtection?: string | null;
            hazardousAreaClassificationStandard?: string | null;
            explosionHazardClassification?: string | null;
            explosionGroup?: string | null;
            temperatureClass?: string | null;
            upstreamHighSidePipeSchedule?: string | null;
            upstreamHighSideLineSize?: string | null;
            upstreamHighSideLineEquipmentRating?: string | null;
            upstreamHighSideLineConnectionType?: string | null;
            upstreamHighSideConnectionOrientation?: string | null;
            upstreamHighSideMaterialType?: string | null;
            designPressureMaximum?: number | null; // int32
            designPressureMinimum?: number | null; // int32
            designTemperatureMaximum?: number | null; // int32
            designTemperatureMinimum?: number | null; // int32
            sourServiceSpecification?: string | null;
            processFluids?: string | null;
            processFluidState?: string | null;
            serviceDescription2?: string | null;
            processFluidCorrosiveCompounds?: string | null;
            processFluidErosionPossibility?: string | null;
            processFluidConductivity?: number | null; // int32
            processFluidSpecificHeatRatio?: number | null; // double
            processVacuumPossibility?: boolean | null;
            processFluidVapourPressure?: string | null;
            minimumOperatingVolumetricFlow?: number | null; // int32
            minimumOperatingVelocity?: number | null; // int32
            minimumOperatingTemperature?: number | null; // int32
            minimumOperatingPressure?: number | null; // int32
            normalOperatingVolumetricFlow?: number | null; // int32
            normalOperatingVelocity?: number | null; // double
            normalOperatingTemperature?: number | null; // int32
            normalOperatingPressure?: number | null; // double
            normalOperatingLiquidSpecificGravity?: number | null; // double
            normalOperatingLiquidViscosity?: number | null; // double
            maximumOperatingVolumetricFlow?: string | null;
            maximumOperatingVelocity?: string | null;
            maximumOperatingTemperature?: string | null;
            maximumOperatingPressure?: string | null;
            maximumOperatingLiquidSpecificGravity?: string | null;
            maximumOperatingLiquidViscosity?: string | null;
            maximumOperatingVapourMolecularWeight?: string | null;
            maximumOperatingVapourCompressibilityFactor?: string | null;
            maximumOperatingVapourActualDensity?: string | null;
            maximumOperatingVapourViscosity?: string | null;
            maximumRecoverablePressureDrop?: string | null;
            maximumUnrecoverablePressureLoss?: string | null;
            bodyMaterial?: string | null;
            transmitterDisplay?: string | null;
            transmitterConnectingCableLength?: number | null; // double
            externalPowerVoltage?: number | null; // double
            cableEntry?: string | null;
            cableTermination?: string | null;
            communicationProtocol?: string | null;
            protocolVersion?: string | null;
            failSafeDirection?: string | null;
            calibrationBespoke?: string | null;
            measurementRangeMinimum?: number | null; // double
            measurementRangeMaximum?: number | null; // double
            spanAndZeroAdjustment?: string | null;
            accuracy?: string | null;
            repeatability?: number | null; // double
            stepResponse?: number | null; // double
            longTermDrift?: number | null; // double
            longTermStability?: string | null;
            vibration?: string | null;
            weatherEnclosure?: string | null;
            mountingBracket?: string | null;
            mountingBracketMaterial?: string | null;
            electricalSurgeProtector?: string | null;
            sunshade?: string | null;
            manufacturer?: string | null;
            modelNumber?: string | null;
            pressureRetainingBoltMaterial?: string | null;
            pressureRetainingNutMaterial?: string | null;
            bodyElementSensorManufacturerModelNumber?: string | null;
            coriolisTubeMaterial?: string | null;
            coriolisTubeType?: string | null;
            flangeMaterial?: string | null;
            linerMaterial?: string | null;
            coilCoverMaterial?: string | null;
            junctionBoxMaterial?: string | null;
            electrodeType?: string | null;
            electrodeMaterial?: string | null;
            meterMinimumConductivity?: number | null; // double
            groundingRing?: boolean | null;
            groundingRingMaterial?: string | null;
            liningProtector?: string | null;
            bodySize?: number | null; // double
            endConnectionSize?: number | null; // double
            endConnectionFlangeType?: string | null;
            endConnectionFlangeRating?: string | null;
            transmitterModelNumber?: string | null;
            transmitterEnclosureMaterial?: string | null;
            transmitterMounting?: string | null;
            transmitterConnectingCables?: string | null;
            transmitterConnectingCableQuantity?: number | null; // int32
            supplyVoltage?: string | null;
            isolatedOutputs?: string | null;
            lowerRangeLimit?: number | null; // double
            upperRangeLimit?: number | null; // double
            coriolisOuterCasingMaterial?: string | null;
            coriolisOuterCasingBurstPressure?: string | null;
            ruptureDiscBurstPressure?: string | null;
            processSecondaryContainment?: string | null;
        }
        export interface SupplierOfferedProduct {
            manufacturer?: string | null;
            modelNumber?: string | null;
            equipmentManufacturerSerialNumber?: string | null;
            minimumAmbientTemperature?: number | null; // int32
            maximumAmbientTemperature?: number | null; // int32
            pressureRetainingBoltMaterial?: string | null;
            pressureRetainingNutMaterial?: string | null;
            silRating?: string | null;
            ingressProtection?: string | null;
            exProtection?: string | null;
            hazardousAreaClassificationStandard?: string | null;
            explosionHazardClassification?: string | null;
            explosionGroup?: string | null;
            temperatureClass?: string | null;
            bodyElementSensorManufacturerModelNumber?: string | null;
            bodyMaterial?: string | null;
            coriolisTubeMaterial?: string | null;
            coriolisTubeType?: string | null;
            flangeMaterial?: string | null;
            linerMaterial?: string | null;
            coilCoverMaterial?: string | null;
            junctionBoxMaterial?: string | null;
            electrodeType?: string | null;
            electrodeMaterial?: string | null;
            meterMinimumConductivity?: number | null; // double
            groundingRing?: boolean | null;
            groundingRingMaterial?: string | null;
            liningProtector?: string | null;
            bodySize?: number | null; // double
            endConnectionSize?: number | null; // double
            endConnectionFlangeType?: string | null;
            endConnectionFlangeRating?: string | null;
            transmitterModelNumber?: string | null;
            transmitterEnclosureMaterial?: string | null;
            transmitterMounting?: string | null;
            transmitterDisplay?: string | null;
            transmitterConnectingCables?: string | null;
            transmitterConnectingCableLength?: number | null; // double
            transmitterConnectingCableQuantity?: number | null; // int32
            supplyVoltage?: string | null;
            externalPowerVoltage?: string | null;
            isolatedOutputs?: string | null;
            cableEntry?: string | null;
            cableTermination?: string | null;
            communicationProtocol?: string | null;
            protocolVersion?: string | null;
            failSafeDirection?: string | null;
            calibrationBespoke?: string | null;
            measurementRangeMinimum?: number | null; // double
            measurementRangeMaximum?: number | null; // double
            spanAndZeroAdjustment?: string | null;
            lowerRangeLimit?: number | null; // double
            upperRangeLimit?: number | null; // double
            accuracy?: string | null;
            repeatability?: number | null; // double
            stepResponse?: number | null; // double
            longTermDrift?: number | null; // double
            longTermStability?: string | null;
            vibration?: string | null;
            weatherEnclosure?: string | null;
            mountingBracket?: string | null;
            mountingBracketMaterial?: string | null;
            electricalSurgeProtector?: string | null;
            sunshade?: string | null;
            codeRequirement?: number | null; // int32
            conformityAssessmentSystemLevel?: number | null; // int32
            tagNumber?: string | null;
            serviceDescription?: string | null;
            projectCountry?: string | null;
            projectRegion?: string | null;
            plantEnvironmentalLocation?: string | null;
            pidNumber?: string | null;
            lineOrEquipmentNumber?: string | null;
            baseConditions?: string | null;
            baseTemperature?: number | null; // int32
            basePressure?: number | null; // int32
            coatingDurability?: string | null;
            upstreamHighSidePipeSchedule?: string | null;
            upstreamHighSideLineSize?: string | null;
            upstreamHighSideLineEquipmentRating?: string | null;
            upstreamHighSideLineConnectionType?: string | null;
            upstreamHighSideConnectionOrientation?: string | null;
            upstreamHighSideMaterialType?: string | null;
            designPressureMaximum?: number | null; // int32
            designPressureMinimum?: number | null; // int32
            designTemperatureMaximum?: number | null; // int32
            designTemperatureMinimum?: number | null; // int32
            sourServiceSpecification?: string | null;
            processFluids?: string | null;
            processFluidState?: string | null;
            serviceDescription2?: string | null;
            processFluidCorrosiveCompounds?: string | null;
            processFluidErosionPossibility?: string | null;
            processFluidConductivity?: number | null; // int32
            processFluidSpecificHeatRatio?: number | null; // double
            processVacuumPossibility?: boolean | null;
            processFluidVapourPressure?: string | null;
            minimumOperatingVolumetricFlow?: number | null; // int32
            minimumOperatingVelocity?: number | null; // int32
            minimumOperatingTemperature?: number | null; // int32
            minimumOperatingPressure?: number | null; // int32
            normalOperatingVolumetricFlow?: number | null; // int32
            normalOperatingVelocity?: number | null; // double
            normalOperatingTemperature?: number | null; // int32
            normalOperatingPressure?: number | null; // double
            normalOperatingLiquidSpecificGravity?: number | null; // double
            normalOperatingLiquidViscosity?: number | null; // double
            maximumOperatingVolumetricFlow?: string | null;
            maximumOperatingVelocity?: string | null;
            maximumOperatingTemperature?: string | null;
            maximumOperatingPressure?: string | null;
            maximumOperatingLiquidSpecificGravity?: string | null;
            maximumOperatingLiquidViscosity?: string | null;
            maximumOperatingVapourMolecularWeight?: string | null;
            maximumOperatingVapourCompressibilityFactor?: string | null;
            maximumOperatingVapourActualDensity?: string | null;
            maximumOperatingVapourViscosity?: string | null;
            maximumRecoverablePressureDrop?: string | null;
            maximumUnrecoverablePressureLoss?: string | null;
            coriolisOuterCasingMaterial?: string | null;
            coriolisOuterCasingBurstPressure?: string | null;
            ruptureDiscBurstPressure?: string | null;
            processSecondaryContainment?: string | null;
        }
    }
}
declare namespace Paths {
    namespace CreateComment {
        export type RequestBody = Components.Schemas.Comment;
        namespace Responses {
            export type $200 = Components.Schemas.Comment;
        }
    }
    namespace GetComment {
        namespace Parameters {
            export type Id = string; // uuid
        }
        export interface PathParameters {
            id: Parameters.Id /* uuid */;
        }
        export interface QueryParameters {
            id?: Parameters.Id /* uuid */;
        }
        namespace Responses {
            export type $200 = Components.Schemas.Comment;
        }
    }
    namespace GetComments {
        namespace Responses {
            export type $200 = Components.Schemas.Comment[];
        }
    }
    namespace GetCommentsForTag {
        namespace Parameters {
            export type Id = string;
            export type TagId = string; // uuid
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        export interface QueryParameters {
            tagId?: Parameters.TagId /* uuid */;
        }
        namespace Responses {
            export type $200 = Components.Schemas.Comment[];
        }
    }
    namespace GetContract {
        namespace Parameters {
            export type Id = string; // uuid
        }
        export interface PathParameters {
            id: Parameters.Id /* uuid */;
        }
        export interface QueryParameters {
            id?: Parameters.Id /* uuid */;
        }
        namespace Responses {
            export type $200 = Components.Schemas.Contract;
        }
    }
    namespace GetContracts {
        namespace Responses {
            export type $200 = Components.Schemas.Contract[];
        }
    }
    namespace GetContractsForContractor {
        namespace Parameters {
            export type Id = string; // uuid
        }
        export interface PathParameters {
            id: Parameters.Id /* uuid */;
        }
        export interface QueryParameters {
            id?: Parameters.Id /* uuid */;
        }
        namespace Responses {
            export type $200 = Components.Schemas.Contract[];
        }
    }
    namespace GetDatasheet {
        namespace Parameters {
            export type Id = string; // uuid
        }
        export interface PathParameters {
            id: Parameters.Id /* uuid */;
        }
        namespace Responses {
            export type $200 = Components.Schemas.DatasheetDto;
        }
    }
    namespace GetDatasheets {
        namespace Responses {
            export type $200 = Components.Schemas.DatasheetDto[];
        }
    }
    namespace GetDatasheetsForProject {
        namespace Parameters {
            export type Id = string; // uuid
        }
        export interface PathParameters {
            id: Parameters.Id /* uuid */;
        }
        export interface QueryParameters {
            id?: Parameters.Id /* uuid */;
        }
        namespace Responses {
            export type $200 = Components.Schemas.DatasheetDto[];
        }
    }
}
