require "json"

package = JSON.parse(File.read(File.join(__dir__, "package.json")))

Pod::Spec.new do |s|
  s.name         = "react-native-debug-address"
  s.version      = package["version"]
  s.summary      = package["description"]
  s.description  = <<-DESC
                  react-native-debug-address
                   DESC
  s.homepage     = "https://github.com/nick-bull/react-native-debug-address"
  # brief license entry:
  s.license      = "MIT"
  # optional - use expanded license entry instead:
  # s.license    = { :type => "MIT", :file => "LICENSE" }
  s.authors      = { "Nick Bull" => "nick@bull.dev" }
  s.platforms    = { :ios => "9.0" }
  s.source       = { :git => "https://github.com/nick-bull/react-native-debug-address.git", :tag => "#{s.version}" }

  s.source_files = "ios/**/*.{h,c,m,swift}"
  s.requires_arc = true

  s.dependency "React"
  # ...
  # s.dependency "..."
end

