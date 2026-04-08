// Apex Anonymous: Create internal user James Clifton with requested properties.
// Update EMAIL_ADDRESS before running.

String EMAIL_ADDRESS = 'your.email@example.com';
String UNIQUE_SUFFIX = String.valueOf(DateTime.now().getTime());
String USERNAME = 'james.clifton.' + UNIQUE_SUFFIX + '@example.invalid';
String NICKNAME = 'jclifton' + UNIQUE_SUFFIX.right(6);

if (EMAIL_ADDRESS == 'your.email@example.com') {
    System.assert(false, 'Please update EMAIL_ADDRESS before running this script.');
}

UserLicense salesforceLicense = [
    SELECT Id, Name
    FROM UserLicense
    WHERE Name = 'Salesforce'
    LIMIT 1
];

Profile standardUserProfile = [
    SELECT Id, Name
    FROM Profile
    WHERE Name = 'Standard User'
    AND UserLicenseId = :salesforceLicense.Id
    LIMIT 1
];

UserRole installRepairRole = [
    SELECT Id, Name
    FROM UserRole
    WHERE Name = 'Installation & Repair Services'
    LIMIT 1
];

User newUser = new User(
    FirstName = 'James',
    LastName = 'Clifton',
    Email = EMAIL_ADDRESS,
    Username = USERNAME,
    Alias = 'jclifton',
    CommunityNickname = NICKNAME,
    TimeZoneSidKey = 'America/Los_Angeles',
    LocaleSidKey = 'en_US',
    EmailEncodingKey = 'UTF-8',
    LanguageLocaleKey = 'en_US',
    ProfileId = standardUserProfile.Id,
    UserRoleId = installRepairRole.Id,
    UserPermissionsSupportUser = true,
    UserPermissionsKnowledgeUser = true
);

Database.DMLOptions dmlOptions = new Database.DMLOptions();
dmlOptions.EmailHeader.triggerUserEmail = false;
dmlOptions.EmailHeader.triggerOtherEmail = false;
newUser.setOptions(dmlOptions);

insert newUser;

System.debug('Created user Id: ' + newUser.Id);
System.debug('Username: ' + USERNAME);
