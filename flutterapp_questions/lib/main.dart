import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';

void main() {
  runApp(myApp());
}

class myApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'My App',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: MainScreen(),
    );
  }
}

class MainScreen extends StatefulWidget {
  @override
  _MainScreenState createState() => _MainScreenState();
}

class _MainScreenState extends State<MainScreen> {
  List<dynamic> students = [];
  List<dynamic> filter = [];
  List<String> colleges = [];
  String selectedCollege = '';
  bool AtoB = true;

  @override
  void initState() {
    super.initState();
    studentlist();
  }

  Future<void> studentlist() async {
    final response = await http.get(Uri.parse('https://1qy9d2uuyg.execute-api.ap-northeast-1.amazonaws.com/default/Students-API'));

    if (response.statusCode == 200) {
      List<dynamic> allstudent = json.decode(response.body);
      List<String> allcolleges = [];
      allstudent.forEach((student) {
        if (!allcolleges.contains(student['college'])) {
          allcolleges.add(student['college']);
        }
      });
      setState(() {
        students = allstudent;
        filter = allstudent;
        colleges = allcolleges;
      });
    } else {
      // Handle error
      print('Failed to fetch students');
    }
  }

  void sortStudents() {
    setState(() {
      AtoB = !AtoB;
      filter.sort((a, b) => a['name'].compareTo(b['name']) * (AtoB ? 1 : -1));
    });
  }

  void filterStudents(String college) {
    setState(() {
      selectedCollege = college;
      filter = students.where((student) => student['college'] == college).toList();
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Student List'),
      ),
      body: Column(
        children: [
          Padding(
            padding: const EdgeInsets.all(10.0),
            child: Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                Expanded(
                  child: DropdownButton<String>(
                    isExpanded: true,
                    value: selectedCollege.isNotEmpty ? selectedCollege : null,
                    hint: Text('Filter by college'),
                    items: colleges.map<DropdownMenuItem<String>>((college) {
                      return DropdownMenuItem<String>(
                        value: college,
                        child: Text(college),
                      );
                    }).toList(),
                    onChanged: (value) {
                      setState(() {
                        selectedCollege = value ?? '';
                        filterStudents(selectedCollege);
                      });
                    },
                  ),
                ),
                IconButton(
                  icon: Icon(Icons.sort),
                  onPressed: sortStudents,
                ),
              ],
            ),
          ),
          Expanded(
            child: ListView.builder(
              itemCount: filter.length,
              itemBuilder: (context, index) {
                return Card(
                  shadowColor: Colors.blue,
                  color: Colors.yellow[300],
                  elevation: 5,
                  margin: EdgeInsets.symmetric(horizontal: 10, vertical: 6),
                  child: ListTile(
                    contentPadding: EdgeInsets.symmetric(horizontal: 20, vertical: 10),
                    title: Text(
                      filter[index]['name'],
                      style: TextStyle(
                        fontStyle: FontStyle.italic,
                        letterSpacing: 2,
                        color: Colors.lightBlue[800],
                        fontWeight: FontWeight.bold,
                        fontSize: 18,
                      ),

                    ),
                  ),
                );
              },
            ),
          ),
        ],
      ),
    );
  }
}
