def buildApp() {
    echo 'building the application'
    echo 'The app is buileded now be happy!'
    sh 'npm pack'
}

def testApp() {
    echo 'Testing  the application'
    
}

def deployApp() {
    echo 'Testing  the application oj Kenkins server'
    //echo "deploying version ${params.VERSION}"
}

return this 
