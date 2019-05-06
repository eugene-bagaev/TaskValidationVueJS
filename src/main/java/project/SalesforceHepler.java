package project;

import com.sforce.soap.apex.*;
import com.sforce.soap.apex.ExecuteAnonymousResult;
import com.sforce.soap.apex.LogCategory;
import com.sforce.soap.apex.LogCategoryLevel;
import com.sforce.soap.apex.LogInfo;
import com.sforce.soap.apex.LogType;
import com.sforce.soap.metadata.MetadataConnection;
import com.sforce.soap.tooling.*;
import com.sforce.ws.ConnectionException;
import com.sforce.ws.ConnectorConfig;
import project.Rules.*;

import project.Processors.RequestProcessor;
import java.io.*;
import java.text.MessageFormat;
import java.util.*;
import java.util.zip.ZipEntry;
import java.util.zip.ZipFile;


public class SalesforceHepler {

    public static String templateNotFoundFile =  "Не найден файл: {0}";

    public static long startTime = System.currentTimeMillis();

    private String tempUsername;
    private String tempPassword;

    public static String zip_file_for_read = "";
    private static Map<String, Rule> mapping = TaskMapping.METADATA_CHECK;

    public SalesforceHepler(String username, String password) {
        this.tempUsername = username;
        this.tempPassword = password;
    }


    public void executeAnonymous() {

        ToolingHelper hlp = new ToolingHelper(tempUsername, tempPassword);
        String apexCode = "System.debug('SOAAAP)";
        String res = hlp.executeAnonymousWithReturnStringDebug(apexCode);
//            https://www.programcreek.com/java-api-examples/?api=com.sforce.soap.apex.SoapConnection
//            https://developer.salesforce.com/docs/atlas.en-us.api_tooling.meta/api_tooling/intro_soap_overview.htm?search_text=SOQL


//        System.out.println("tempUsername");
//        System.out.println(tempUsername);
//        System.out.println("tempPassword");
//        System.out.println(tempPassword);
//        String un = "";
//        SoapConnection connection;
//        ConnectorConfig soapConfig = new ConnectorConfig();
//
//        try {
//            MetadataConnection metadataConnection = MetadataLoginUtil.login(
//                    tempUsername,
//                    tempPassword
//            );
//            System.out.println("*****************" + tempUsername + " >> Un: " + un);
//            System.out.println("*****************" + tempUsername + " >> SI " + MetadataLoginUtil.mapUserToSessionId.get(tempUsername));
//
//            soapConfig.setAuthEndpoint(MetadataLoginUtil.mapUserToLoginResult.get(tempUsername).getServerUrl());
//            soapConfig.setServiceEndpoint(MetadataLoginUtil.mapUserToLoginResult.get(tempUsername).getServerUrl().replace("/u/", "/s/"));
//            soapConfig.setSessionId(MetadataLoginUtil.mapUserToSessionId.get(tempUsername));
//
//            connection = new SoapConnection(soapConfig);
////            com.sforce.soap.apex.RunTestsRequest request = new com.sforce.soap.apex.RunTestsRequest();
//            //com.sforce.soap.tooling.DebuggingInfo debuggingInfo = new DebuggingInfo();
//            DebuggingHeader_element debuggingInfo = new DebuggingHeader_element();
//            debuggingInfo.setDebugLevel(LogType.Debugonly);
//            DebuggingInfo_element rr = new DebuggingInfo_element();
//            rr.setDebugLog("USER_DEBUG");
//
//            LogInfo[] logs = new LogInfo[1];
//            logs[0] = new LogInfo();
//            logs[0].setCategory(LogCategory.Apex_code);
//            logs[0].setLevel(LogCategoryLevel.Debug);
//            debuggingInfo.setCategories(logs);
//
//
//            connection.setDebuggingHeader(logs, LogType.Debugonly);
////            connection.__setDebuggingHeader(debuggingInfo);
//
//            TraceFlag dd = new TraceFlag();
//            dd.setLogType("USER_DEBUG");
////            connection.se
//
//            ExecuteAnonymousResult res = connection.executeAnonymous("System.debug('SOAAAP ');");
//            System.out.println(">>" + res + "<<");
//            String log = connection.getDebuggingInfo().getDebugLog();
//
//            System.out.println(">>" + log + "<<");
//
////            val debugHeader = new DebuggingHeader_element()
////            debugHeader.setDebugLevel("Debugonly")
////            conn.__setDebuggingHeader(debugHeader)
////            val res = conn.executeAnonymous(apexCode)
////            val log = conn.getDebuggingInfo.getDebugLog
//
////            DebuggingHeader_element deb = new DebuggingHeader_element();
////            deb.setDebugLevel(LogType.Debugonly);
////            connection.__setDebuggingHeader(deb);
////
////            LogInfo[] logs = new LogInfo[1];
////            logs[0] = new LogInfo();
////            logs[0].setCategory(LogCategory.Apex_code);
////            logs[0].setLevel(LogCategoryLevel.Fine);
//////            DebuggingHeader_element deb = new DebuggingHeader_element();
//////            deb.setDebugLevel(LogType.Debugonly);
//////            deb.setCategories(logs);
//////            connection.__setDebuggingHeader(deb);
////            DebuggingInfo ff = new DebuggingInfo();
////            ff.setDebugLog("DEBUGONLY");
////            connection.se
//
//
////
////            System.out.println(">>" + connection.getDebuggingInfo() + " >>");
////            System.out.println(">>" + metadataConnection.getDebuggingHeader() + " >>");
//
//
//
////            https://www.programcreek.com/java-api-examples/?api=com.sforce.soap.apex.SoapConnection
////            https://developer.salesforce.com/docs/atlas.en-us.api_tooling.meta/api_tooling/intro_soap_overview.htm?search_text=SOQL
//
//
////            toolingSoapSforceCom.LogInfo apexLogInfo = new toolingSoapSforceCom.LogInfo();
////            apexLogInfo.category='All';
////            apexLogInfo.level='FINEST';
////            List< toolingSoapSforceCom.LogInfo> lstLogInfo = new List< toolingSoapSforceCom.LogInfo>();
////            lstLogInfo.add(apexLogInfo);
////
////            toolingSoapSforceCom.DebuggingHeader_element objDebuggingHeaderElement = new toolingSoapSforceCom.DebuggingHeader_element();
////            objDebuggingHeaderElement.debugLevel = 'DEBUGONLY';
////            objDebuggingHeaderElement.categories = lstLogInfo;
//        } catch (ConnectionException ex) {
//            System.out.println(Thread.currentThread().getName() + ". >> Connection Exception: " + ex);
//        }
    }

    public void processUser() {

        DeployRetrieveHelper instance = new DeployRetrieveHelper(tempUsername, tempPassword);

        instance.retrieveZip();
//        RequestProcessor.userListResults = checkZipFile();
        RequestProcessor.userResults.put(tempUsername, checkZipFile());
        //readZipFile();

    }


//    public void disableFeedTrackingHeaderSample() {
//        try {
//// Insert a large number of accounts.
//            SObject[] sObjects = new SObject[500];
//            for (int i = 0; i < 500; i++) {
//                Account a = new Account();
//                a.setName("my-account-" + i);
//                sObjects[i] = a;
//            }
//// Set the SOAP header to disable feed tracking to avoid generating a
//// large number of feed items because of this bulk operation.
//            connection.setDisableFeedTrackingHeader(true);
//// Perform the bulk create. This won't result in 500 feed items, which
//// would otherwise be generated without the DisableFeedTrackingHeader.
//            SaveResult[] sr = connection.create(sObjects);
//            for (int i = 0; i < sr.length; i++) {
//                if (sr[i].isSuccess()) {
//                    System.out.println("Successfully created account with id: " +
//                            sr[i].getId() + ".");
//                } else {
//                    System.out.println("Error creating account: " + sr[i].getErrors()[0].getMessage());
//                }
//            }
//        } catch (ConnectionException ce) {
//            ce.printStackTrace();
//        }
//    }


    private List<Results> checkZipFile() {

        List<Results> results = new ArrayList<>();
        try {
            ZipFile file = new ZipFile(zip_file_for_read);
            for (String item : mapping.keySet()) {
                Enumeration< ? extends ZipEntry > e = file.entries();
                boolean fileFound = false;
                while (e.hasMoreElements()) {
                    ZipEntry entry = e.nextElement();
                    if (entry.getName().contains(item) && !entry.getName().contains(".xml")) {
                        fileFound = true;
                        BufferedReader br = new BufferedReader(new InputStreamReader(file.getInputStream(entry)));
                        String allFile = "";
                        String line = null;
                        while ((line = br.readLine()) != null){
                            allFile = allFile + line;
                        }
                        results.addAll(mapping.get(item).checkCondition(allFile));
                        break;
                    }
                }
                // not found file
                if (!fileFound){
                    results.add(new Results(item, MessageFormat.format(templateNotFoundFile, item), false));
                }
            }
        } catch (IOException ex) {
            System.out.println("ioEx.SFHelper.readZip: " + ex.getMessage());
        }
        for (Results res : results) {
            System.out.println(">>> " + res.status + " " + res.nameMetadata + " " +  res.message);
        }
        return results;
    }







    private void readZipFile() {

//        try {
//
//            ZipFile file = new ZipFile(zip_file_for_read);
//
//            for (ZipEntry e : Collections.list(file.entries())) {
//
//                for (String item : mapping.keySet()) {
//
//                    if (e.getName().contains(item) && !e.getName().contains(".xml")) {
//                        System.out.println(Thread.currentThread().getName() + ". >> Found class: " + item);
//
//                        checkMethodsInFile(e, item, file);
//                    }
//                }
//            }
//
//        } catch (IOException ex) {
//            System.out.println("ioEx.SFHelper.readZip: " + ex.getMessage());
//        }
    }

    private void checkMethodsInFile(ZipEntry entry, String className, ZipFile file) {

//        InputStream stream = null;
//
//        try {
//            stream = file.getInputStream(entry);
//
//            try (BufferedReader br = new BufferedReader(new InputStreamReader(stream))) {
//
//                while (br.read() != -1) {
//
//                    String currentLine = br.readLine();
//
//                    if (!(currentLine == null)) {
//
//                        for (String item : mapping.get(className)) {
//
//                            if (currentLine.contains(item) && currentLine != null) {
//                                System.out.println(Thread.currentThread().getName() + ". >> Found Method: " + item);
//                                System.out.println(Thread.currentThread().getName() + ". >> Line: " + currentLine);
//
//                                validateTasksByRunTests();
//                            }
//                        }
//                    }
//                }
//
//            } catch (IOException ex) {
//                System.out.println(Thread.currentThread().getName() + ". >> ioEx.SFHelper.checkMeth.readClass: " + ex.getMessage());
//            }
//
//        } catch (IOException ioEx) {
//            System.out.println(Thread.currentThread().getName() + ". >> ioEx.sfHelper.checkMeth" + ioEx.getMessage());
//        } finally {
//
//            try {
//                stream.close();
//            } catch (IOException ex) {
//                System.out.println(Thread.currentThread().getName() + ". >> Exception in closing ZipEntry Stream");
//            }
//
//
//        }
    }

    private void validateTasksByRunTests() {

        ValidateByTestHelper helper = new ValidateByTestHelper(tempUsername);

    }

//    public static void checkUsersResults() throws InterruptedException {
//
//        if (GoogleHelper.userCreds.size() == 0) {
//            System.out.println("No users creds found in Google File");
//            System.exit(1);
//        }
//
////         Stress test
////        for (Integer count = 0; count < 50; count++) { // for stress test
////            System.out.println(">>>>>>>>>>>>>>>>>>>>>>>>>> Test: " + count); // for stress test
//            for (String item : GoogleHelper.userCreds.keySet()) {
//
//                SalesforceHandlerThread thread = new SalesforceHandlerThread(
//                        item,
//                        GoogleHelper.userCreds.get(item),
//                        item
//                );
//                thread.start();
////            } // for stress test
////            Thread.sleep(10000); // for stress test
//        }
//    }

}
