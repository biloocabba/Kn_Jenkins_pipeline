def buildApp() {
    echo 'building the application'
    echo 'The app is buileded now be happy!'
}

def testApp() {
    echo 'Testing  the application'
    
}

def deployApp() {
    echo 'Testing  the application'
    echo "deploying version ${params.VERSION}"
}

return this 
