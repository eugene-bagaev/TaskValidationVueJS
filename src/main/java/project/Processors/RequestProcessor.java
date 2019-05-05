package project.Processors;

import project.GoogleHelper;
import project.Rules.Results;
import project.SalesforceHepler;

import java.util.Arrays;
import java.util.List;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;
import java.util.stream.Stream;
import project.TaskMapping;
public class RequestProcessor {
    String users;
    public static Map<String, List<Results>> userResults = new HashMap<>();
    public static List<Results> userListResults = new ArrayList<>();

    public RequestProcessor(String userNames) {
        users = userNames;
        if (userNames == "all") {
            users = String.join(";", GoogleHelper.userCreds.keySet());
        }
    }

    public Map<String, List<Results>> getUsersInfo() {
        userResults.clear();
        Stream<String> creds = Arrays.stream(users.split(";"));
        TaskMapping.generatePackageXML();
        creds.parallel().forEach(value -> {
            SalesforceHepler helper = new SalesforceHepler(value, GoogleHelper.userCreds.get(value));
            helper.processUser();
        });
        System.out.println("*********");
        System.out.println("*********");
        return userResults;
    }

    public void test() {
        System.out.println("TESSSTTTTTT!!!!");
        System.out.println(GoogleHelper.userCreds.keySet());
        Stream<String> creds = Arrays.stream(users.split(";"));

        creds.parallel().forEach(value -> {
            System.out.println(value);
            SalesforceHepler helper = new SalesforceHepler(value, GoogleHelper.userCreds.get(value));
            helper.executeAnonymous();
        });

    }


}
