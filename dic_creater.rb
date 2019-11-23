require "csv"
INPUT_FILE_PATH = "./input/aws_services_name_base.tsv"
OUPTPUT_DETAIL_FILE_PATH = "./output/aws_dic_detail.txt"
OUPTPUT_SIMPLE_FILE_PATH = "./output/aws_dic_simple.txt"

class DicCreater
  attr_reader :detail_arr, :simple_arr
  def initialize
    @detail_arr = []
    @simple_arr = []
  end

  def separate_row_data(row)
    dt = detail_transcript(row)
    @detail_arr += transform(row, dt, 2)
    @simple_arr += transform(row, simple_transcript(row), 2)
  end

  def detail_transcript(row)
    !row[0].nil? ? row[0] + " " + row[1] : row[1] 
  end

  def simple_transcript(row)
    row[1]
  end

  def transform(row, transcript, start)
    arr = []
    i = start
    loop do
      raise "end" if row[i].nil? 
      arr.push([row[i], transcript, "名詞"])
      i+=1
    rescue
      return arr
    end
  end
end

dc = DicCreater.new
input = CSV.read(INPUT_FILE_PATH, col_sep: "\t", headers: true)

input.each do  |row|
  dc.separate_row_data(row)
end

# dc.detail_arr
# dc.simple_arr

CSV.open(OUPTPUT_DETAIL_FILE_PATH, "w", :col_sep => "\t") do |io|
  dc.detail_arr.each { |row| io.puts(row) }
end

CSV.open(OUPTPUT_SIMPLE_FILE_PATH, "w", :col_sep => "\t") do |io|
  dc.simple_arr.each { |row| io.puts(row) }
end